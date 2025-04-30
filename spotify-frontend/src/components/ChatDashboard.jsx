import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";
import { assets } from "../assets/frontend-assets/assets";

const socket = io("http://localhost:3000"); // Replace with your backend URL

function ChatDashboard() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(
    JSON.parse(localStorage.getItem("selectedUser")) || null
  );
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Ensure user is set from localStorage on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && !user) {
      setUser(JSON.parse(storedUser));
    } else if (!storedUser) {
      navigate("/login");
    }
  }, [user, setUser, navigate]);

  useEffect(() => {
    if (!user) return;

    // Fetch all users except the current user
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/user/list");
        const filteredUsers = response.data.users.filter(
          (u) => u._id !== user.id
        );
        setUsers(filteredUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();

    // Listen for incoming messages
    socket.on("receiveMessage", (message) => {
      if (
        selectedUser &&
        (message.sender === selectedUser._id ||
          message.receiver === selectedUser._id)
      ) {
        setMessages((prev) => [...prev, message]);
      }
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [selectedUser, user]);

  useEffect(() => {
    // Fetch chat history for the selected user on page load
    if (selectedUser) {
      fetchChatHistory(selectedUser);
    }
  }, [selectedUser]);

  const fetchChatHistory = async (user) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/chat/history/${user._id}`
      );
      setMessages(response.data.messages);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    localStorage.setItem("selectedUser", JSON.stringify(user));
    fetchChatHistory(user);
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const message = {
      sender: user.id,
      receiver: selectedUser._id,
      content: newMessage,
    };

    try {
      // Save message to the backend
      await axios.post("http://localhost:3000/api/chat/send", message);

      // Emit message to the server
      socket.emit("sendMessage", message);

      // Clear the input field
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (!user) {
    return null; // Prevent rendering if user is not logged in
  }

  return (
    <div className="flex flex-col h-full w-full bg-[#0d0d0d] text-white">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 bg-[#121212]">
        <div className="flex items-center gap-4">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-full cursor-pointer"
            src={assets.arrow_left}
            alt="Back"
          />
          <h1 className="text-xl font-bold">Chat</h1>
        </div>
      </div>

      <div className="flex flex-1">
        {/* User List */}
        <div className="w-1/3 bg-[#1a1a1a] p-4">
          <h2 className="text-lg font-bold mb-4">Users</h2>
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-2 mb-4 rounded bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <ul className="space-y-2">
            {users.map((u) => (
              <li
                key={u._id}
                onClick={() => handleSelectUser(u)}
                className={`p-2 rounded cursor-pointer ${
                  selectedUser?._id === u._id
                    ? "bg-[#333333]"
                    : "hover:bg-[#2a2a2a]"
                }`}
              >
                {u.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Area */}
        <div className="w-2/3 bg-[#121212] p-4 flex flex-col">
          {selectedUser ? (
            <>
              <h2 className="text-lg font-bold mb-4">
                Chat with {selectedUser.name}
              </h2>
              <div className="flex-1 overflow-y-auto bg-[#1a1a1a] p-4 rounded">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${
                      msg.sender === user.id ? "text-right" : "text-left"
                    }`}
                  >
                    <p
                      className={`inline-block p-2 rounded ${
                        msg.sender === user.id
                          ? "bg-green-500 text-white"
                          : "bg-[#333333] text-white"
                      }`}
                    >
                      {msg.content}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-2 rounded bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-400">Select a user to start chatting.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatDashboard;