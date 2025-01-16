import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config';
import axios from 'axios';
import styles from './signup.module.css';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend /register route
      const response = await axios.post(`${API_BASE_URL}/api/auth/register`, {
        username: formData.name,
        email: formData.email,
        password: formData.password,
      });

      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);

      // Redirect to home page
      navigate('/home');
    } catch (err) {
      // Handle error and display message
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  const handleGoogleSignup = () => {
    alert('Signup with Google clicked');
    // Implement Google OAuth logic here
  };

  return (
    <div className={styles.main}>
      <div className={styles.signupCard}>
        <h2>Welcome To DevHub</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className={styles.input}
          />
          {error && <p className={styles.error}>{error}</p>}
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <button type="submit" className={styles.signupButton}>Sign Up</button>
        </form>
        <hr />
        <button onClick={handleGoogleSignup} className={styles.googleButton}>
          <img
            src="../src/assets/google.png"
            alt="Google"
            className={styles.googleIcon}
          />
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
