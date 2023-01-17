import "./Main.scss";
import { Header } from "../Header/Header";
import { MobileNav } from "../MobileNav/MobileNav";
import { planetsInfo } from '../../api/planetsInfo';
import { useState } from "react";

const planetsNames = Object.keys(planetsInfo);

export const Main = () => {
  const [currentPlanet, setCurrentPlanet] =  useState('Mercury');
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);

  const handleMobileNav = () => {
    setIsMobileNavOpened(currentState => !currentState);
  };

  return (
    <main className="Main">
      <Header
        opened={isMobileNavOpened}
        handleMobileNav={handleMobileNav}
        setPlanet={setCurrentPlanet}
      />
      <MobileNav
        planets={planetsNames}
        opened={isMobileNavOpened}
        handleNavClose={setIsMobileNavOpened}
        setPlanet={setCurrentPlanet}
      />
      {currentPlanet}
    </main>
  );
};
