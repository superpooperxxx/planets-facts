import { gsap } from 'gsap';
import { useContext, useRef, useEffect } from 'react'
import { GlobalContext } from '../GlobalProvider/GlobalProvider';
import './PlanetImage.scss';

export const PlanetImage = ({ currentInfo }) => {
  const { currentPlanet } = useContext(GlobalContext);
  const imgName = currentInfo === 'structure' ? 'structure' : 'overview';
  const imagesRef = useRef();
  const surfaceRef = useRef();

  useEffect(() => {
    const imagesAnim = gsap.fromTo(
      imagesRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
      }
    )

    return () => {
      imagesAnim.revert();
    }
  }, [currentPlanet, currentInfo]);

  useEffect(() => {
    const surfaceAnim = gsap.fromTo(
      surfaceRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 1.2,
      }
    )

    return () => {
      surfaceAnim.revert();
    }
  }, [currentInfo]);

  return (
    <div className="Planet-Image Page-Content__Planet-Image">
      <div className="Planet-Image__Container" ref={imagesRef}>
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
            ref={surfaceRef}
          />
        )}
      </div>
    </div>
  );
};
