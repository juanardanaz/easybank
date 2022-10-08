import React from 'react';
import '../../scss/components/_footer.scss';
import Facebook from '../../assets/img/icon-facebook.svg';
import Instagram from '../../assets/img/icon-instagram.svg';
import Pinterest from '../../assets/img/icon-pinterest.svg';
import Twitter from '../../assets/img/icon-twitter.svg';
import Youtube from '../../assets/img/icon-youtube.svg';
import Logo from '../../assets/img/logo.svg';

const Footer = () => {
  return (
    <section className='footer section'>
        <div className="footer-container container grid">
            <div className="footer-content">
                <img src={Logo} alt="logo" className='footer-logo'/>

                <div className="footer-social">
                    <img src={Facebook} alt="facebook" className="footer-social-icon"/>
                    <img src={Youtube} alt="youtube" className="footer-social-icon"/>
                    <img src={Twitter} alt="twitter" className="footer-social-icon"/>
                    <img src={Pinterest} alt="pinterest" className="footer-social-icon"/>
                    <img src={Instagram} alt="instagram" className="footer-social-icon"/>
                </div>
            </div>

            <div className="footer-content">
                <ul className="footer-links">
                    <li><a href="#"className="footer-link">About Us</a></li>
                    <li><a href="#"className="footer-link">Contact</a></li>
                    <li><a href="#"className="footer-link">Blog</a></li>
                    <li><a href="#"className="footer-link">Careers</a></li>
                    <li><a href="#"className="footer-link">Support</a></li>
                    <li><a href="#"className="footer-link">Privacy Policy</a></li>
                </ul>
            </div>

            <div className="footer-content">
                <a href="#" className='button'>Request Invite</a>
                <p className="footer-copy">© Easybank. All Rights Reserved</p>
            </div>
        </div>
        
    </section>
  )
}

export default Footer;