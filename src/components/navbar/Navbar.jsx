import React from 'react';
import Logo from '../../assets/img/logo.svg';
import Hamburger from '../../assets/img/icon-hamburger.svg';
import '../../scss/components/_navbar.scss';
import {Link} from 'react-scroll';

/*==================== NAVBAR ====================*/
const Navbar = () => {
  return (
    <header className='header' id='header'>
        <nav className='nav container' id='nav_menu'>
            <a href="#">
                <img src={Logo} alt='logo' className='nav-logo'/>
            </a>

            <div className="nav_menu" id="nav-menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <Link to="hero" spy={true} smooth={true} offset={-30} duration={500} className="nav_link">Home</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="choose" spy={true} smooth={true} offset={-30} duration={500} className="nav_link">About</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="footer" spy={true} smooth={true} offset={50} duration={500} className="nav_link">Contact</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="articles" spy={true} smooth={true} offset={-30} duration={500} className="nav_link">Blog</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="footer" spy={true} smooth={true} offset={50} duration={500} className="nav_link">Careers</Link>
                    </li>
                </ul>
            </div>

            <div className='nav_toggle' id='nav-toggle'>
                <img src={Hamburger} alt='hamburger' className='nav_hamburger'/>
            </div>

            <Link to="header" className='button button-header' spy={true} smooth={true} offset={50} duration={500}>
                Request Invite
            </Link>
        </nav>
    </header>
  )
}

export default Navbar;

/* ========= SHOW MENU ========= */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav_menu class
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle','nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));