import React from 'react';
import styles from './CoursesSection.module.css';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { courses } from '../data/coursesData';
import { useAuth } from '../context/AuthContext';

const CoursesSection = () => {
  const { login } = useAuth();

  return (
    <section id="explore" className={styles.courses}>
      <h2 className={styles.title} data-aos="fade-up">Explore</h2>
      <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
        Courses in Astrology, Vaasthu and Numerology
      </p>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <Link 
            key={course.id} 
            to={`/course/${course.id}`} 
            className={styles.cardLink} 
            onClick={login}
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <CourseCard 
              title={course.title} 
              price={course.price} 
              image={course.image} 
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;