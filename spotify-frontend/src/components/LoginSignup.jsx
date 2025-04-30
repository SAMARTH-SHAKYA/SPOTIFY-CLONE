import { useState } from 'react';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Signup'}
        </h2>
        <form className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              className="bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-black rounded px-4 py-2 hover:bg-gray-200 transition"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            onClick={toggleMode}
            className="underline cursor-pointer text-sky-400"
          >
            {isLogin ? 'Signup' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
