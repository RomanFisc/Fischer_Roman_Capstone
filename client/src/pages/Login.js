import React from 'react';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const handleAuthSuccess = (data) => {
    console.log('Login successful:', data);
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm isLogin={true} onAuthSuccess={handleAuthSuccess} />
    </div>
  );
};

export default Login;