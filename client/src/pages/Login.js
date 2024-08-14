import React from 'react';
import AuthForm from '../../../client1/src/components/AuthForm';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <AuthForm mode="login" />
    </div>
  );
}

export default Login;