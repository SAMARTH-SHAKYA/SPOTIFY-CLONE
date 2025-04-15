import React from 'react';

const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#1e1e1e]/80 backdrop-blur-lg p-6 rounded-lg w-full max-w-sm text-white shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">Sign up</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-2 rounded bg-[#2a2a2a] text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-[#2a2a2a] text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 rounded bg-[#2a2a2a] text-white"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-4 p-2 rounded bg-[#2a2a2a] text-white"
        />
        <button className="w-full bg-green-500 py-2 rounded hover:bg-green-600 transition">
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
