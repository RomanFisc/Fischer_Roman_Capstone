import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default NavBar;