import React from 'react';
import '../../scss/components/_footer.scss';
import Facebook from '../../assets/img/icon-facebook.svg';
import Instagram from '../../assets/img/icon-instagram.svg';
import Pinterest from '../../assets/img/icon-pinterest.svg';
import Twitter from '../../assets/img/icon-twitter.svg';
import Youtube from '../../assets/img/icon-youtube.svg';
import LogoFooter from '../../assets/img/logo-footer.svg';
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <section className='footer section' id='footer'>
        <div className="footer-container container grid">
            <div className="footer-content">
                <a href="#">
                    <img src={LogoFooter} alt="logo" className='footer-logo'/>
                </a>

                <div className="footer-social">
                    <a href="https://www.facebook.com/" target='_blank'>
                        <img src={Facebook} alt="facebook" className="footer-social-icon"/>
                    </a>
                    <a href="https://www.youtube.com/" target='_blank'>
                        <img src={Youtube} alt="youtube" className="footer-social-icon"/>
                    </a>
                    <a href="https://www.twitter.com/" target='_blank'>
                        <img src={Twitter} alt="twitter" className="footer-social-icon"/>
                    </a>
                    <a href="https://www.pinterest.com/" target='_blank'>
                        <img src={Pinterest} alt="pinterest" className="footer-social-icon"/>
                    </a>
                    <a href="https://www.instagram.com/" target='_blank'>
                        <img src={Instagram} alt="instagram" className="footer-social-icon"/>
                    </a>
                </div>
            </div>

            <div className="footer-content">
                <ul className="footer-links">
                    <li>
                        <Link to="choose" spy={true} smooth={true} offset={-30} duration={500} className="footer-link">About Us</Link>
                    </li>
                    <li>
                        <Link to="footer" spy={true} smooth={true} offset={50} duration={500} className="footer-link">Contact</Link>
                    </li>
                    <li>
                        <Link to="articles" spy={true} smooth={true} offset={-30} duration={500} className="footer-link">Blog</Link>
                    </li>
                    <li>
                        <Link to="footer" spy={true} smooth={true} offset={50} duration={500} className="footer-link">Careers</Link>
                    </li>
                    <li>
                        <Link to="articles" spy={true} smooth={true} offset={-30} duration={500} className="footer-link">Support</Link>
                    </li>
                    <li>
                        <Link to="choose" spy={true} smooth={true} offset={-30} duration={500} className="footer-link">Privacy Policy</Link>
                    </li>
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