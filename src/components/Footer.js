import React, { useState } from 'react';
import { FaYoutube, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';
import InfoModal from './InfoModal'; // Import the new modal

// --- Social Media Links Data ---
const youtubeLinks = [
    { name: 'Ms. Akila Murthy', url: 'https://www.youtube.com/@AstroPalmistry_AkilaMurthy' },
    { name: 'Ms. Archana Murthy', url: 'https://www.youtube.com/@astrosciencewithArchnaMurthy' },
];
const twitterLinks = [
    { name: 'Prof. Dr. N. S. Murthy', url: 'https://twitter.com' },
    { name: 'Ms. Akila Murthy', url: 'https://twitter.com' },
    { name: 'Ms. Archana Murthy', url: 'https://twitter.com' },
];
const instagramLinks = [
    { name: 'Prof. Dr. N. S. Murthy', url: 'https://instagram.com' },
    { name: 'Ms. Akila Murthy', url: 'https://instagram.com/akilasmurthy' },
    { name: 'Ms. Archana Murthy', url: 'https://instagram.com/archnamurthy' },
];
// --- End Data ---

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', links: [] });

  const handleIconClick = (title, links) => {
    setModalContent({ title, links });
    setIsModalOpen(true);
  };

  return (
    <>
      <footer id="contact" className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.leftColumn}>
            <h3 className={styles.title}>MURTHY'S ACADEMY</h3>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s.
            </p>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.socialSection}>
              <h4 className={styles.subtitle}>Follow For Latest Updates</h4>
              <div className={styles.iconGroup}>
                {/* FIX: Changed these to buttons that open the modal */}
                <button onClick={() => handleIconClick('Our YouTube Channels', youtubeLinks)}><FaYoutube /></button>
                <button onClick={() => handleIconClick('Our Twitter Profiles', twitterLinks)}><FaTwitter /></button>
                <button onClick={() => handleIconClick('Our Instagram Profiles', instagramLinks)}><FaInstagram /></button>
              </div>
            </div>
            <div className={styles.socialSection}>
              <h4 className={styles.subtitle}>For Queries</h4>
              <div className={styles.iconGroup}>
                <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          © Copyright 2025
        </div>
      </footer>

      {/* Render the modal component */}
      <InfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        links={modalContent.links}
      />
    </>
  );
};

export default Footer;