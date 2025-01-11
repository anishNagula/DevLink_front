import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './signup.module.css';

const Signup = () => {
  const handleGoogleSignup = () => {
    alert('Signup with Google clicked');
    // Implement Google OAuth logic here
  };

  return (
    <div className={styles.main}>
      <div className={styles.signupCard}>
        <h2>Welcome To DevLink</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          <p>Already have an account? <Link to="/login">Login</Link></p>          <button type="submit" className={styles.signupButton}>Sign Up</button>
        </form>
        <hr/>
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
