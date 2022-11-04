import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../../assets/img/logo.svg';
import '../../scss/components/_navbar.scss';
import {Link} from 'react-scroll';

/*==================== NAVBAR ====================*/
function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <header className='header' id='header'>
            <nav className='nav container'>
                <a href="#">
                    <img src={Logo} alt='logo' className='nav-logo'/>
                </a>

                {/* Desktop Menu */}
                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#hero" className="nav_link">Home</a>
                        </li>
                        <li className="nav_item">
                            <a href="#choose" className="nav_link">About</a>
                        </li>
                        <li className="nav_item">
                            <a href="#footer" className="nav_link">Contact</a>
                        </li>
                        <li className="nav_item">
                            <a href="#articles" className="nav_link">Blog</a>
                        </li>
                        <li className="nav_item">
                            <a href="#footer" className="nav_link">Careers</a>
                        </li>
                    </ul>
                </div>

                {/* Hamburger */}
                <div onClick={handleClick} className='nav-hamburger'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                {/* Mobile Menu */}
                <div className={!nav ? 'hidden' : 'nav_mobile_menu'}>
                    <ul className='nav_mobile_container'>
                        <li className="nav_mobile_item">
                            <a href="#hero" className="nav_mobile_link">Home</a>
                        </li>
                        <li className="nav_mobile_item">
                            <a href="#choose" className="nav_mobile_link">About</a>
                        </li>
                        <li className="nav_mobile_item">
                            <a href="#footer" className="nav_mobile_link">Contact</a>
                        </li>
                        <li className="nav_mobile_item">
                            <a href="#articles" className="nav_mobile_link">Blog</a>
                        </li>
                        <li className="nav_mobile_item">
                            <a href="#footer" className="nav_mobile_link">Careers</a>
                        </li>
                    </ul>
                </div>

                <Link to="header" className='button button-header' spy={true} smooth={true} offset={50} duration={500}>
                    Request Invite
                </Link>
            </nav>
        </header>
    )
}

export default Navbar;

