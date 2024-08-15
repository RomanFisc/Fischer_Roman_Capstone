import React from 'react';
import AuthForm from '../components/AuthForm';

const Register = () => {
  const handleAuthSuccess = (data) => {
    // Handle registration success (e.g., store token, redirect, etc.)
    console.log('Registration successful:', data);
  };

  return (
    <div>
      <h1>Register</h1>
      <AuthForm isLogin={false} onAuthSuccess={handleAuthSuccess} />
    </div>
  );
};

export default Register;