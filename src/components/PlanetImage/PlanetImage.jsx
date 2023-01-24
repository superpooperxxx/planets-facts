import { gsap } from 'gsap';
import { useContext, useRef, useEffect } from 'react'
import { GlobalContext } from '../GlobalProvider/GlobalProvider';
import './PlanetImage.scss';

export const PlanetImage = ({ currentInfo }) => {
  const { currentPlanet } = useContext(GlobalContext);
  const imgName = currentInfo === 'structure' ? 'structure' : 'overview';

  useEffect(() => {
    
  }, []);

  return (
    <div className="Planet-Image Page-Content__Planet-Image">
      <div className="Planet-Image__Container">
        <img
          src={require(`../../static/${currentPlanet}/${imgName}.svg`)}
          alt={`${currentInfo} of ${currentPlanet}`} 
          className={`Planet-Image__Picture Planet-Image__Picture--${currentPlanet}`}
        />

        {currentInfo === 'surface' && (
          <img
            src={require(`../../static/${currentPlanet}/surface.png`)}
            alt={`of ${currentPlanet} surface`} 
            className="Planet-Image__Surface"
          />
        )}
      </div>
    </div>
  );
};
