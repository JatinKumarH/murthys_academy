import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { courses } from '../data/coursesData';
import styles from './MyLearningPage.module.css';
import { FaPlayCircle, FaFileAlt, FaAngleDown, FaArrowLeft } from 'react-icons/fa';

const MyLearningPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === courseId);

  const [currentVideo, setCurrentVideo] = useState(course?.content[0]?.lectures.find(l => l.type === 'video') || {});
  const [openSection, setOpenSection] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  if (!course || !course.content) {
    return (
        <div className={styles.notFound}>
            <h2>Course content not found!</h2>
            <Link to="/">Back to Home</Link>
        </div>
    );
  }

  return (
    <div className={styles.learningPage}>
      <main className={styles.mainContent}>
        <div className={styles.playerWrapper}>
          <ReactPlayer 
            url={currentVideo.videoUrl} 
            className={styles.reactPlayer}
            width="100%"
            height="100%"
            controls={true}
            playing={true}
          />
        </div>

        <div className={styles.courseHeader}>
            <div className={styles.headerLeft}>
                <button onClick={() => navigate(-1)} className={styles.backButton}><FaArrowLeft /> Back</button>
                <h1 className={styles.courseTitle}>{course.title}</h1>
            </div>
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{width: '25%'}}></div>
                <span>25% Complete</span>
            </div>
        </div>

        <div className={styles.bottomSection}>
            <div className={styles.tabs}>
                <button onClick={() => setActiveTab('overview')} className={activeTab === 'overview' ? styles.activeTab : ''}>Overview</button>
            </div>
            <div className={styles.tabContent}>
                {activeTab === 'overview' && (
                    <div className={styles.overview}>
                        <h3>About this course</h3>
                        <p>{course.headline}</p>
                    </div>
                )}
            </div>
        </div>
      </main>
      
      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Course content</h3>
        <div className={styles.accordion}>
          {course.content.map((section, sectionIndex) => (
            <div key={sectionIndex} className={styles.accordionItem}>
              <div className={styles.accordionHeader} onClick={() => setOpenSection(openSection === sectionIndex ? null : sectionIndex)}>
                <span>{section.sectionTitle}</span>
                <FaAngleDown className={`${styles.arrowIcon} ${openSection === sectionIndex ? styles.open : ''}`} />
              </div>
              <div className={`${styles.accordionContent} ${openSection === sectionIndex ? styles.open : ''}`}>
                <ul>
                  {section.lectures.map((lecture, lectureIndex) => (
                    <li key={lectureIndex} onClick={() => lecture.type === 'video' && setCurrentVideo(lecture)} className={currentVideo.lectureTitle === lecture.lectureTitle ? styles.activeLecture : ''}>
                      {lecture.type === 'video' ? <FaPlayCircle className={styles.lectureIcon}/> : <FaFileAlt className={styles.lectureIcon}/>}
                      <div>
                        <span className={styles.lectureName}>{lecture.lectureTitle}</span>
                        <span className={styles.lectureDuration}>{lecture.duration}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default MyLearningPage;