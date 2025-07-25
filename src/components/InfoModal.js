import React from 'react';
import styles from './InfoModal.module.css';
import logo from '../assets/images/logo.png'; 

const InfoModal = ({ isOpen, onClose, title, links = [] }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <img src={logo} alt="Murthy's Academy Logo" className={styles.logo} />
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.linksContainer}>
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoModal;