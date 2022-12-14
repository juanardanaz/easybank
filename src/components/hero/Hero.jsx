import React from 'react';
import '../../scss/components/_hero.scss';
import Mockups from '../../assets/img/image-mockups.png';
import BgMobile from '../../assets/img/bg-intro-mobile.svg';
import BgDesktop from '../../assets/img/bg-intro-desktop.svg';

const Hero = () => {
  return (
    <section className='hero section' id='hero'>
      <div className="hero-container">
        <div className="hero-images">
          <img src={Mockups} alt="mockups" className='hero-mockups'/>
          <img src={BgMobile} alt="background image" className='hero-image-mobile'/>
          <img src={BgDesktop} alt="background image" className='hero-image-desktop'/>
        </div>

        <div className="hero-data">
          <h1 className='hero-title'>Next generation digital banking</h1>
          <p className='hero-description'>Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.</p>
          <a href="#" className='button'>Request Invite</a>
        </div>
      </div>
    </section>
  )
}

export default Hero;