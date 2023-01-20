import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalProvider/GlobalProvider';
import './PlanetImage.scss';

export const PlanetImage = ({ currentInfo }) => {
  const { currentPlanet } = useContext(GlobalContext);

  const imgName = currentInfo === 'structure' ? 'structure' : 'overview';

  return (
    <div className="Planet-Image Page-Content__Planet-Image">
      <div className="Planet-Image__Container">
        <img
          src={require(`../../static/${currentPlanet}/${imgName}.svg`)}
          alt={`${currentInfo} of ${currentPlanet}`} 
          className={`Planet-Image__Picture Planet-Image__Picture--${currentPlanet}`}
        />

        {currentInfo === 'geology' && (
          <img
            src={require(`../../static/${currentPlanet}/geology.png`)}
            alt={`of ${currentPlanet} surface`} 
            className="Planet-Image__Geology"
          />
        )}
      </div>
    </div>
  );
};
