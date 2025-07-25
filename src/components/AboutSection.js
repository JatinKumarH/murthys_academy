import React from 'react';
import styles from './AboutSection.module.css';
import aboutImage from '../assets/images/about-image.png';

const features = [
    { 
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: aboutImage
    },
    { 
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.",
      image: aboutImage
    },
    { 
      text: "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: aboutImage
    },
];

const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title} data-aos="fade-up">Why Choose Us?</h2>

      {features.map((feature, index) => (
        
        <div 
          key={index} 
          className={`${styles.featureRow} ${index % 2 !== 0 ? styles.reverse : ''}`}
        >
         
          <div className={styles.text} data-aos={index % 2 !== 0 ? "fade-left" : "fade-right"}>
            <p>{feature.text}</p>
          </div>
          <div className={styles.imageContainer} data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"}>
            <img src={feature.image} alt="Feature illustration" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutSection;