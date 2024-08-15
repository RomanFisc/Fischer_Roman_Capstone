import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ isLogin, onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); 

    try {
      const url = isLogin ? 'http://localhost:3001/api/auth/login' : 'http://localhost:3001/api/auth/register';
      
      const response = await axios.post(url, { email, password });
      
      onAuthSuccess(response.data);
      
      setMessage(isLogin ? 'Login successful!' : 'Registration successful!');
    } catch (error) {
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
      {message && <p>{message}</p>} {}
    </form>
  );
};

export default AuthForm;