import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';  // Importing CSS for styling

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy validation for Admin login
    if (email === 'admin@example.com' && password === 'admin123') {
      // Navigate to the organization page
      alert('Admin Login Successful');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
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

export default AdminLogin;
