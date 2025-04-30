import { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin
      ? 'http://localhost:3000/api/user/login'
      : 'http://localhost:3000/api/user/sign-up';
    const payload = isLogin ? { email, password } : { username, email, password };

    try {
      const res = await axios.post(endpoint, payload);
      console.log('Response:', res.data);

      // Save user data to localStorage and context
      const userData = res.data.user;
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);

      // Redirect to the home page
      navigate('/');
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Signup'}
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none"
            required
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