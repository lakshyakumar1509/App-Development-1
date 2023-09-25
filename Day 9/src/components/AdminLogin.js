import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './user.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = async () => {
    if (email === 'nim@gmail.com' && password === '123') {
      navigate('/Home'); // Use navigate to change routes
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='add'>
      <form id='addform'>
        <h2>Sign In</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="button" onClick={handleLogin}>
          Sign In
        </button>
        <br />
      </form>
    </div>
  );
};

export default AdminLogin;