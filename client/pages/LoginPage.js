import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = '/';
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;