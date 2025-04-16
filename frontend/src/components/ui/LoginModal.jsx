import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { LOGIN_ROUTE } from "../../constants.js";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email) {
      toast("Email is requried.");
      return;
    }
    if (!password) {
      toast("Password is requried.");
      return;
    }
    try {
      const response = await axios.post(LOGIN_ROUTE, { email, password });
      console.log(response);
      if (response.status == 200) {
        toast.success("login successful!");
        onClose();
      } else {
        toast.success("login Failed!");
      }
    } catch (error) {
      toast.success("login Failed!");
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#1e1e1e]/80 backdrop-blur-lg p-6 rounded-lg w-full max-w-sm text-white shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">Log in</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-[#2a2a2a] text-white"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 rounded bg-[#2a2a2a] text-white"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-green-500 py-2 rounded hover:bg-green-600 transition"
          onClick={handleLogin}
        >
          Log in
        </button>
        <button
          onClick={onClose}
          className="mt-4 text-gray-400 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
