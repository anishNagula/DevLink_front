import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/home">DevLink</Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="/explore">Explore</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/"><button className={styles.logoutButton}>Logout</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
