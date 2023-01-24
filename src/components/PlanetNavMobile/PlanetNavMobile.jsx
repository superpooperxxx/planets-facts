import './PlanetNavMobile.scss';
import cn from 'classnames'; 
import { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';
import { gsap } from 'gsap';

const planetNavBtns = ['overview', 'structure', 'surface'];

export const PlanetNavMobile = ({ currentInfo, setInfo }) => {
  const { currentPlanet } = useContext(GlobalContext);
  const mobileNavRef = useRef(null)

  useEffect(() => {
    const mobileNavAnim = gsap.to(
      mobileNavRef.current,
      {
        y: 0,
        duration: 1,
        delay: 0.2,
      }
    );

    return () => {
      mobileNavAnim.revert();
    }
  }, []);

  return (
    <ul className="Planet-Nav-Mobile Container" ref={mobileNavRef}>
      {planetNavBtns.map(btn => (
        <li
          className="Planet-Nav-Mobile__Item"
          key={btn}
        >
          <button
            type="button"
            onClick={() => setInfo(btn)}
            className={cn(
              `Planet-Nav-Mobile__Btn Planet-Nav-Mobile__Btn--${currentPlanet}`,
              {
                'Planet-Nav-Mobile__Btn--Active': currentInfo === btn,
              }
            )}
          >
            { btn }
          </button>
        </li>
      ))}
    </ul>
  );
};
