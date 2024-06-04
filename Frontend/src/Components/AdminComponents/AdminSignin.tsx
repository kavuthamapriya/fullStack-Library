import React, { useState } from 'react';
import "../App.css";

interface AdminSignInFormProps {
  onLoginSuccess: (token: string) => void;
}

const AdminSignInForm: React.FC<AdminSignInFormProps>= ({onLoginSuccess}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:9082/admin/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'An error occurred during login');
      }


      const data = await response.json();
      if (!data.token) {
        throw new Error('Token not received');
      }

      onLoginSuccess(data.token);
      window.location.href = '/adminPage'; 
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <>
    <div className='container'>
      <form onSubmit={handleSubmit} className='loginForm'>
        <h1>Admin Sign In</h1>
        <label>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={username}
            className='nameBar'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            className='nameBar'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type='submit' className='loginButton'>Sign In</button>
        <br />
        {error && <p className='error'>{error}</p>}
      </form>
    </div></>
  );
};

export default AdminSignInForm;

