import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './landing.module.css'

const Landing = () => {
  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <h3>DevLink</h3>
        <Link to="/signup"><button className={styles.navBtn}>Get Started</button></Link>
      </nav>

      <div className={styles.heroSec}>
        <h1 className={styles.hero1}>One Community, Infinite Possibility</h1>
        <h1 className={styles.hero2}>Your gateway to tech evolution</h1>
        <div className={styles.heroBtn}>
          <Link to="/signup"><button className={styles.heroBtn1}>SignUp</button></Link>
          <Link to="/login"><button className={styles.heroBtn2}>Login</button></Link>
        </div>
      </div>

      <div className={styles.imgSec}>
        <img src='../src/assets/landing2.png'></img>
      </div>

      <h3 className={styles.featuresH3}>Features & Overview</h3>
      <div className={styles.featureOver}>
        <div className={styles.featureCard}><span>Post Articles:</span><br/> Share your knowledge and experiences.</div>
        <div className={styles.featureCard}><span>Forums:</span><br/> Engage in tech discussions on various topics.</div>
        <div className={styles.featureCard}><span>Private Messaging:</span><br/> Connect directly with other users.</div>
        <div className={styles.featureCard}><span>Trending Projects:</span><br/> Showcase and discover interesting tech projects.</div>
      </div>

      <div className={styles.HowItWorks}>
        <h3 className={styles.featuresH3}>How it works</h3>
        <p>1. Sign up and create a profile.</p>
        <p>2. Start posting content or participate in discussions.</p>
        <p>3. Collaborate on projects and network with like-minded tech enthusiasts. need it for this</p>
      </div>

      <footer>
        <a href="">Home</a>
        <a href="">Contact Us</a>
        <a href="">Terms of Service</a>
      </footer>

    </div>
  )
}

export default Landing;