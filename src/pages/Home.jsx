import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <LeftSidebar/>
      <RightSidebar/>
      hello
    </div>
  )
}

export default Home;