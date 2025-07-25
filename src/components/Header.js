import React, { useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FiShoppingCart } from 'react-icons/fi';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { useAnimation } from '../context/AnimationContext';
import { useAuth } from '../context/AuthContext';
import styles from './Header.module.css';
import logo from '../assets/images/logo.png';
import CartPopover from './CartPopover';

const Header = () => { 
  const { isLoggedIn, openAuthModal } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { triggerRotation } = useAnimation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    triggerRotation();
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.logo} onClick={handleLogoClick} style={{cursor: 'pointer'}}>
          <img src={logo} alt="Murthy's Academy Logo" />
          <span>MURTHY'S ACADEMY</span>
        </div>
        <nav className={styles.desktopNav}>
          {isHomePage ? ( <ScrollLink to="explore" smooth={true} duration={500} offset={-80}>Courses</ScrollLink> ) : ( <RouterLink to="/#explore">Courses</RouterLink> )}
          {isHomePage ? ( <ScrollLink to="about" smooth={true} duration={500} offset={-80}>About</ScrollLink> ) : ( <RouterLink to="/#about">About</RouterLink> )}
          <RouterLink to="/instructors">Instructors</RouterLink>
          {isHomePage ? ( <ScrollLink to="contact" smooth={true} duration={500} offset={0}>Contact</ScrollLink> ) : ( <RouterLink to="/#contact">Contact</RouterLink> )}
        </nav>
      </div>

      <div className={styles.rightActions}>
        <div className={styles.desktopActions}>
          <div className={styles.cartContainer}>
              <RouterLink to="/cart" className={styles.cartIcon}><FiShoppingCart /></RouterLink>
              <CartPopover />
          </div>
          {isLoggedIn ? (
              <>
                <RouterLink to="/learn/astrology-101" className={styles.myLearning}>My Learning</RouterLink>
                <FaUserCircle className={styles.profileIcon} />
              </>
            ) : (
              <>
                <button onClick={openAuthModal} className={styles.joinButton}>Join</button>
                <button onClick={openAuthModal} className={styles.loginButton}>Login</button>
              </>
          )}
        </div>

        <RouterLink to="/cart" className={styles.mobileCartIcon}>
          <FiShoppingCart />
        </RouterLink>

        <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>


      <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
        {isHomePage ? ( <ScrollLink to="explore" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Courses</ScrollLink> ) : ( <RouterLink to="/#explore" onClick={closeMenu}>Courses</RouterLink> )}
        {isHomePage ? ( <ScrollLink to="about" smooth={true} duration={500} offset={-80} onClick={closeMenu}>About</ScrollLink> ) : ( <RouterLink to="/#about" onClick={closeMenu}>About</RouterLink> )}
        <RouterLink to="/instructors" onClick={closeMenu}>Instructors</RouterLink>
        {isHomePage ? ( <ScrollLink to="contact" smooth={true} duration={500} offset={0} onClick={closeMenu}>Contact</ScrollLink> ) : ( <RouterLink to="/#contact" onClick={closeMenu}>Contact</RouterLink> )}
        <div className={styles.mobileActions}>
            {isLoggedIn ? (
                <>
                  <RouterLink to="/learn/astrology-101" className={styles.myLearning} onClick={closeMenu}>My Learning</RouterLink>
                  <FaUserCircle className={styles.profileIcon} />
                </>
              ) : (
                <>
                  <button onClick={() => { openAuthModal(); closeMenu(); }} className={styles.joinButton}>Join</button>
                  <button onClick={() => { openAuthModal(); closeMenu(); }} className={styles.loginButton}>Login</button>
                </>
            )}
        </div>
      </nav>
    </header>
  );
};

export default Header;