import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/coursesData';
import { FaPlayCircle, FaCheck } from 'react-icons/fa';
import styles from './CourseDashboard.module.css';

const CourseDashboard = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
        <div className={styles.notFound}>
            <h2>Course Not Found</h2>
            <Link to="/">Back to Home</Link>
        </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.heroSection}>
        <div 
          className={styles.heroBackground} 
          style={{ backgroundImage: `url(${course.image})` }}
        ></div>
        <div className={styles.heroContent}>
            <h1 className={styles.courseTitle}>{course.title}</h1>
            <p className={styles.headline}>{course.headline}</p>
            <p className={styles.instructor}>Created by {course.instructorName}</p>
        </div>
      </div>

      <div className={styles.dashboardLayout}>
        <div className={styles.mainContent}>
          <div className={styles.learningBox}>
            <h2 className={styles.sectionTitle}>What you'll learn</h2>
            <ul className={styles.learningList}>
              {course.learningPoints.map((point, index) => (
                <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <FaCheck className={styles.checkIcon} /> 
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className={styles.sidebar} data-aos="fade-left" data-aos-delay="200">
          <div className={styles.sidebarCard}>
            <div className={styles.preview}>
              <img src={course.image} alt={`${course.title} preview`} className={styles.previewImage}/>
              <FaPlayCircle className={styles.playIcon} />
              <span>Preview this course</span>
            </div>
            <h3 className={styles.price}>₹{course.price}/-</h3>
            <button className={styles.addToCartButton}>Add to Cart</button>
            <Link to={`/learn/${course.id}`} className={styles.goToCourseButton}>Go to course</Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseDashboard;