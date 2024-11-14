import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Post request to the JSON server
      const response = await axios.post('http://localhost:5000/users', {
        email,
        password,
      });

      if (response.status === 201) {
        alert('Sign up successful. Please log in.');
        navigate('/login');
      }
    } catch (error) {
      console.error('There was an error signing up!', error);
      alert('Failed to sign up. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button type="submit">Sign Up</button>
        <p className="signup-option">
          Existing user? <Link to="/login">Already have an Account?</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
