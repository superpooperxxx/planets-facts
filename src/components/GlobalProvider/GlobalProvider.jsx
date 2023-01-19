import React, { useMemo, useState } from 'react';

export const GlobalContext = React.createContext({
  currentPlanet: "Mercury",
  setCurrentPlanet: () => {},
});

export const GlobalProvider = ({ children }) => {
  const [currentPlanet, setCurrentPlanet] =  useState('Mercury');

  const contextValue = useMemo(() => {
    return {
      currentPlanet,
      setCurrentPlanet,
    };
  }, [currentPlanet]);
  
  return (
    <GlobalContext.Provider value={contextValue}>
      { children }
    </GlobalContext.Provider>
  );
};
