import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ isLogin, onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State for feedback messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    try {
      // Update URL to include port 3001
      const url = isLogin ? 'http://localhost:3001/api/auth/login' : 'http://localhost:3001/api/auth/register';
      
      // Make the POST request
      const response = await axios.post(url, { email, password });
      
      // Call onAuthSuccess callback with response data
      onAuthSuccess(response.data);
      
      // Set success message
      setMessage(isLogin ? 'Login successful!' : 'Registration successful!');
    } catch (error) {
      // Handle errors and set error message
      setMessage('Authentication error: ' + (error.response?.data?.msg || 'Something went wrong.'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      {message && <p>{message}</p>} {/* Display feedback message */}
    </form>
  );
};

export default AuthForm;