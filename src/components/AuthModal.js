import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import styles from './AuthModal.module.css';
import logo from '../assets/images/logo.png'; // Import your logo

const AuthModal = () => {
  const { isModalOpen, closeAuthModal, login } = useAuth();

  if (!isModalOpen) {
    return null;
  }

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    login();
    closeAuthModal();
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div className={styles.overlay} onClick={closeAuthModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeAuthModal}>&times;</button>
        <img src={logo} alt="Murthy's Academy Logo" className={styles.logo} />
        <h2 className={styles.title}>Welcome to Murthy's Academy</h2>
        <p className={styles.subtitle}>Begin your journey into ancient wisdom.</p>
        <div className={styles.googleButtonContainer}>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            useOneTap
            theme="filled_blue"
            shape="rectangular"
            width="300px"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthModal;