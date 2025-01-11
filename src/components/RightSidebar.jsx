import React from 'react';
import styles from './RightSidebar.module.css';

const RightSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h4>Trending</h4>
        <div className={styles.sidebarCont}>
          <h5>#Articles/Resources</h5>
          <ul>
            <li><a href="#">-How to Ace Your First Tech Internship Interview</a></li>
            <li><a href="#">-UI/UX Design Bootcamp</a></li>
            <li><a href="#">-10 Best Tools for Collaborative Coding Projects</a></li>
          </ul>
        </div>
        <div className={styles.sidebarCont}>
          <h5>#Popular Students</h5>
          <ul>
            <li><a href="#">-John Doe - Leading the Data Science Club</a></li>
            <li><a href="#">-Jane Smith - Top Contributor in Hackathons</a></li>
          </ul>
        </div>
        <div className={styles.sidebarCont}>
          <h5>#Popular Internships</h5>
          <ul>
            <li><a href="#">-Data Science Internship at Microsoft</a></li>
            <li><a href="#">-Frontend Development Internship at Meta</a></li>
          </ul>
        </div>
        <div className={styles.sidebarCont}>
          <h5>#Workshops/Webinars</h5>
          <ul>
            <li><a href="#">-UI/UX Design Bootcamp</a></li>
            <li><a href="#">-React Workshop for Beginners</a></li>
          </ul>
        </div>
        <div className={styles.sidebarCont}>
          <h5>#Workshops/Webinars</h5>
          <ul>
            <li><a href="#">-UI/UX Design Bootcamp</a></li>
            <li><a href="#">-React Workshop for Beginners</a></li>
          </ul>
        </div>
    </div>
  );
};

export default RightSidebar;
