import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';  // Importing CSS for styling

const SuperAdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy logic: no validation, directly go to Super Admin Dashboard
    if (email && password) {
      navigate('/super-admin-dashboard'); // Redirect to dashboard after login
    }
  };

  return (
    <div className="admin-login">
      <h2>Super Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default SuperAdminLogin;
