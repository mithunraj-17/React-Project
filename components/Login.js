import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/users');
      const user = response.data.find((u) => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p className="signup-option">
          New user? <Link to="/signup">Sign up here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
