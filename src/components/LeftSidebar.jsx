import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LeftSidebar.module.css';
import userProfilePic from '../assets/anish.jpg';

const LeftSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profileSection}>
        <img 
          src={userProfilePic} 
          alt="User" 
          className={styles.profileImage} 
        />
        <div className={styles.userInfo}>
          <h3>Anish Nagula</h3>
          <button className={styles.viewProfileButton}>View Profile</button>
        </div>
      </div>
      
      
    </div>
  );
};

export default LeftSidebar;
