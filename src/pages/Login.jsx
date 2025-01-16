import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config';
import axios from 'axios';
import styles from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);

      navigate('/home'); // Redirect to home page
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleGoogleLogin = () => {
    alert('Login with Google clicked');
    // Implement Google OAuth logic here
  };

  return (
    <div className={styles.main}>
      <div className={styles.loginCard}>
        <h2>Welcome Back!</h2>
        <form className={styles.form} onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
        <hr />
        <button onClick={handleGoogleLogin} className={styles.googleButton}>
          <img 
            src="../src/assets/google.png" 
            alt="Google" 
            className={styles.googleIcon} 
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
