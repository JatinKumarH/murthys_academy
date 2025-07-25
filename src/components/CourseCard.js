import React from 'react';
import styles from './CourseCard.module.css';

const CourseCard = ({ image, title, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        
      </div>
      <div className={styles.priceBanner}>
        Starts at ₹{price}/-
      </div>
    </div>
  );
};

export default CourseCard;