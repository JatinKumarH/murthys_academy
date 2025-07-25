import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';

import HeroSection from '../components/HeroSection';
import CoursesSection from '../components/CoursesSection';
import AboutSection from '../components/AboutSection';
import styles from './HomePage.module.css';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // This effect runs when the page loads or the URL changes.
    if (location.hash) {
      // We remove the '#' from the beginning of the hash.
      const elementId = location.hash.substring(1);
      
      // Use the scroller from react-scroll to navigate smoothly.
      scroller.scrollTo(elementId, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80, // Offset for your sticky header.
      });
    }
  }, [location]); // The effect depends on the location object.

  return (
    <div className={styles.homePage}>
      <HeroSection />
      
      {/* The `name` prop here is the target for our scroller. */}
      <Element name="explore">
        <CoursesSection />
      </Element>
      
      <Element name="about">
        <AboutSection />
      </Element>
    </div>
  );
};

export default HomePage;