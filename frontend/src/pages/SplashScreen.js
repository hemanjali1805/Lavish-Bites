import React, { useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="splash-title">Lavish Bites</h1>
        <p className="splash-tagline">Where Taste Meets Luxury</p>
      </div>
    </div>
  );
};

export default SplashScreen;