import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { instructors } from '../data/instructorData'; // Import data from our new file
import styles from './InstructorDetailPage.module.css';

const InstructorDetailPage = () => {
  // Get the 'id' from the URL, e.g., 'ns-murthy'
  const { id } = useParams();

  // Find the instructor that matches the id
  const instructor = instructors.find(inst => inst.id === id);

  // If no instructor is found for the id, show a message
  if (!instructor) {
    return (
        <div className={styles.notFound}>
            <h2>Instructor Not Found</h2>
            <Link to="/instructors">Back to Instructors</Link>
        </div>
    );
  }

  return (
    <div className={styles.detailPage}>
      <h1 className={styles.mainTitle}>Meet Our Expert Instructors</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <img src={instructor.image} alt={instructor.name} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.instructorName}>{instructor.name}</h2>
          <p className={styles.instructorBio}>{instructor.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetailPage;