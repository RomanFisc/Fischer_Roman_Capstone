import React from 'react';
import AuthForm from '../components/AuthForm';

const Home = () => {
  const handleAuthSuccess = (data) => {
    console.log('Authentication successful:', data);
  };

  return (
    <div>
      <h1>Welcome to the Task Management App</h1>
    </div>
  );
};

export default Home;