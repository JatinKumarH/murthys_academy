import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AnimationProvider } from './context/AnimationContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InstructorsPage from './pages/InstructorsPage';
import InstructorDetailPage from './pages/InstructorDetailPage'; 
import AuthModal from './components/AuthModal';
import CourseDashboard from './pages/CourseDashboard';
import CartPage from './pages/CartPage';
import ScrollToTop from './components/ScrollToTop';
import MyLearningPage from './pages/MyLearningPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
    });
  }, []);

  const googleClientId = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";

  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={googleClientId}>
        <AnimationProvider>
          <CartProvider>
            <Router>
              <ScrollToTop />
              <Header />
              <AuthModal />
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/course/:courseId" element={<CourseDashboard />} />
                  <Route path="/learn/:courseId" element={<MyLearningPage />} />
                  <Route path="/instructors" element={<InstructorsPage />} />
                  <Route path="/instructors/:id" element={<InstructorDetailPage />} />
                </Routes>
              </main>
              <Footer />
            </Router>
          </CartProvider>
        </AnimationProvider>
      </GoogleOAuthProvider>
    </AuthProvider>
  );
}

export default App;