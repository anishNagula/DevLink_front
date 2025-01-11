import React from 'react'
import './landing.css'

const Landing = () => {
  return (
    <div className='main'>
      <nav className='nav'>
        <h3>DevLink</h3>
        <button>Get Started</button>
      </nav>

      <div className='heroSec'>
        <h1 className='hero1'>One Community, Infinite Possibility</h1>
        <h1 className='hero2'>Your gateway to tech evolution</h1>
        <div className='heroBtn'>
          <button className='heroBtn1'>SignUp</button>
          <button className='heroBtn2'>Login</button>
        </div>
      </div>

      <div className='imgSec'>
        <img src='../src/assets/landing1.png'></img>
      </div>

      <h3 className='featuresH3'>Features & Overview</h3>
      <div className='featureOver'>
        <div className="featureCard"><span>Post Articles:</span><br/> Share your knowledge and experiences.</div>
        <div className="featureCard"><span>Forums:</span><br/> Engage in tech discussions on various topics.</div>
        <div className="featureCard"><span>Private Messaging:</span><br/> Connect directly with other users.</div>
        <div className="featureCard"><span>Trending Projects:</span><br/> Showcase and discover interesting tech projects.</div>
      </div>

      <div className='HowItWorks'>
        <h3 className='featuresH3'>How it works</h3>
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