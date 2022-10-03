import React from 'react';
import Logo from '../../assets/img/logo.svg';
import Hamburger from '../../assets/img/icon-hamburger.svg';
import '../../scss/components/_navbar.scss';

const Navbar = () => {
  return (
    <header>
        <nav className='nav container' id='nav_menu'>
            <a href="#">
                <img src={Logo} alt='logo' className='nav-logo'/>
            </a>

            <div className='nav-menu'>
                <ul className='nav-list'>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>About</li>
                    <li className='nav-item'>Contact</li>
                    <li className='nav-item'>Blog</li>
                    <li className='nav-item'>Careers</li>
                </ul>
            </div>

            <div className='nav_toggle' id='nav-toggle'>
                <img src={Hamburger} alt='hamburger' />
            </div>
        </nav>
    </header>
  )
}

export default Navbar;