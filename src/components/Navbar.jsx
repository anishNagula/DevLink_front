import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    
    // Redirect to the login page
    navigate('/');
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/home">DevHub</Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="/home">Home</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/notifications">Notifications</Link>
        <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
