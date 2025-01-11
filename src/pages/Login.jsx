import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
  const handleGoogleLogin = () => {
    alert('Login with Google clicked');
    // Implement Google OAuth logic here
  };

  return (
    <div className={styles.main}>
      <div className={styles.loginCard}>
        <h2>Welcome Back!</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          <Link to="/home"><button type="submit" className={styles.loginButton}>Login</button></Link>
        </form>
        <hr/>
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
