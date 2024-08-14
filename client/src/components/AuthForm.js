import React, { useState } from 'react';
import { login, register } from '../api/authApi';

function AuthForm({ mode }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === 'login') {
      await login({ username, password });
    } else {
      await register({ username, password });
    }
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
    </form>
  );
}

export default AuthForm;