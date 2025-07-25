import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './InstructorsPage.module.css';

import { instructors } from '../data/instructorData';

const InstructorsPage = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  
  const carouselInstructors = [...instructors, ...instructors];

  const targetIndex = instructors.findIndex(
    (instructor) => instructor.id === 'ns-murthy'
  );

  useEffect(() => {
    if (swiperInstance && targetIndex !== -1) {
      swiperInstance.slideToLoop(targetIndex, 0);
    }
  }, [swiperInstance, targetIndex]);


  return (
    <div className={styles.instructorsPage}>
      <h1 className={styles.title}>Meet Our Expert Instructors</h1>
      <p className={styles.subtitle}>Wisdom passed down through generations</p>
      
      <div className={styles.carouselContainer}>
        <Swiper
          modules={[Pagination, Navigation]}
          onSwiper={setSwiperInstance}
          speed={800}
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className={styles.swiper}
        >
          {carouselInstructors.map((instructor, index) => (
            <SwiperSlide key={index} className={styles.swiper_slide}>
              <Link to={`/instructors/${instructor.id}`} className={styles.instructorProfile}>
                  <div className={styles.imageContainer}>
                      <img src={instructor.image} alt={instructor.name} />
                  </div>
                  <h2 className={styles.instructorName}>{instructor.name}</h2>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default InstructorsPage;