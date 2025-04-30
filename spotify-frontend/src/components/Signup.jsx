import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add API call here
    console.log('Signup:', email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h2 className="text-2xl mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input type="email" placeholder="Email" className="p-2 rounded" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="p-2 rounded" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
