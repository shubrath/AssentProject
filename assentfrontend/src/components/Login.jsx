import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';  // Importing CSS for styling

const Login = () => {
  const navigate = useNavigate();

  const handleSuperAdminLogin = () => {
    navigate('/super-admin-login');  // Redirect to Super Admin Login page
  };

  const handleAdminLogin = () => {
    navigate('/admin-login');
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <button onClick={handleSuperAdminLogin}>Super Admin Login</button>
      <button onClick={handleAdminLogin}>Admin Login</button>
    </div>
  );
};

export default Login;
