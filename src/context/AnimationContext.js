import React, { createContext, useState, useContext } from 'react';

const AnimationContext = createContext();

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
  const [rotationTrigger, setRotationTrigger] = useState(0);

  const triggerRotation = () => {
    setRotationTrigger(prev => prev + 1); // Increment to trigger effect
  };

  return (
    <AnimationContext.Provider value={{ rotationTrigger, triggerRotation }}>
      {children}
    </AnimationContext.Provider>
  );
};