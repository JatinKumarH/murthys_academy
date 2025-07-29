import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useAnimation } from '../context/AnimationContext';
import { useAuth } from '../context/AuthContext';
import styles from './HeroSection.module.css';
import heroCircleImage from '../assets/images/hero-circle.png'; 
import omImage from '../assets/images/logo.png';

const HeroSection = () => {
  const [isRotating, setIsRotating] = useState(false);
  const { rotationTrigger } = useAnimation();
  const { openAuthModal } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => { setIsRotating(true); }, 100);
    return () => clearTimeout(timer);
  }, [rotationTrigger]); 

  const handleImageClick = () => {
    if (isRotating) return;
    setIsRotating(true);
  };

  return (
    <section className={styles.hero} data-aos="fade-up">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Unlock The Secrets <br />
          {/* FIX: Wrapped this phrase in a span to prevent awkward wrapping */}
          <span className={styles.noWrap}>of <span className={styles.highlight}>Ancient Wisdom</span></span>
        </h1>
        <p className={styles.subtitle}>
          Decades of expertise simplified into beginner-friendly courses.
        </p>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className={styles.buttons}>
          <ScrollLink to="explore" smooth={true} duration={500} offset={-80} className={styles.exploreButton}>Explore</ScrollLink>
          <button onClick={openAuthModal} className={styles.signupButton}>Sign Up</button>
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        <img src={heroCircleImage} alt="Ancient Wisdom Circle" className={`${styles.heroImage} ${isRotating ? styles.rotate : ''}`} onAnimationEnd={() => setIsRotating(false)} />
        <img src={omImage} alt="Om Symbol" className={styles.omImage} onClick={handleImageClick} />
      </div>
    </section>
  );
};

export default HeroSection;
