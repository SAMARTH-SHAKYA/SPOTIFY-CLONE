import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { SIGNUP_ROUTE } from '../../constants.js';

const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (!username) {
      toast("Username is required.");
      return;
    }
    if (!email) {
      toast("Email is required.");
      return;
    }
    if (!password) {
      toast("Password is required.");
      return;
    }
    if (password !== confirmPassword) {
      toast("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(SIGNUP_ROUTE, {
        username,
        email,
        password,
      });
      console.log(response);
      toast.success("Signup successful!");
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Signup failed.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#1e1e1e]/80 backdrop-blur-lg p-6 rounded-lg w-full max-w-sm text-white shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">Sign up</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-2 rounded bg-[#2a2a2a] text-white"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-[#2a2a2a] text-white"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 rounded bg-[#2a2a2a] text-white"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-4 p-2 rounded bg-[#2a2a2a] text-white"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="w-full bg-green-500 py-2 rounded hover:bg-green-600 transition"
          onClick={handleSignup}
        >
          Sign up
        </button>
        <button onClick={onClose} className="mt-4 text-gray-400 hover:underline">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
