import React, { useEffect, useMemo, useState } from 'react';

export const GlobalContext = React.createContext({
  currentPlanet: "Mercury",
  setCurrentPlanet: () => {},
  isMobile: false,
});

export const GlobalProvider = ({ children }) => {
  const [currentPlanet, setCurrentPlanet] = useState('Mercury');
  const [isMobile, setIsMobile] = useState(false);

  const handleDeviceSize = () => {
    const isMobile = window.innerWidth < 768;

    setIsMobile(isMobile);
  };

  useEffect(() => {
    handleDeviceSize();

    const callback = () => {
      handleDeviceSize();
    };

    window.addEventListener('resize', callback);

    return () => {
      window.removeEventListener('resize', callback);
    };
  
  }, []);

  const contextValue = useMemo(() => {
    return {
      currentPlanet,
      setCurrentPlanet,
      isMobile,
    };
  }, [currentPlanet, isMobile]);
  
  return (
    <GlobalContext.Provider value={contextValue}>
      { children }
    </GlobalContext.Provider>
  );
};
