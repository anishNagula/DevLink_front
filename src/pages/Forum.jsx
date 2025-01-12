import React from 'react';
import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import styles from './forum.module.css';
import RightSidebar from '../components/RightSidebar';

const Forum = () => {
  return (
    <div className="main">
      <Navbar />
      <LeftSidebar/>
      <RightSidebar/>
      <div className={styles.mainForumFeed}>
        <h1>Forum Discussions</h1>
        <p>Welcome to the forum! Explore topics, start discussions, and share ideas with the community.</p>
        {/* You can add forum category cards or a list here */}
      </div>
    </div>
  );
};

export default Forum;
