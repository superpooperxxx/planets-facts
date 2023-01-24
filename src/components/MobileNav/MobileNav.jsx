import React, {
  useContext,
  useCallback,
  useEffect,
  useRef,
}  from 'react';
import { gsap } from 'gsap';
import './MobileNav.scss';
import { planetsNames } from '../../api/planetsInfo';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';

export const MobileNav = ({ isOpened, close }) => {
  const { setCurrentPlanet } = useContext(GlobalContext);
  const tl = useRef();
  const navRef = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.fromTo(
      navRef.current,
      {
        transform: 'translateX(-100%)',
        opacity: 0,
      },
      {
        transform: 'translateX(0)',
        opacity: 1,
        duration: 0.2,
      }
    )

    tl.current.fromTo(
      '.Mobile-Nav__Item',
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
      }
    )
  }, []);

  useEffect(() => {
    isOpened
      ? tl.current.play()
      : tl.current.reverse()

  }, [isOpened]);

  const handleNavLinkClick = useCallback((planet) => {
    setCurrentPlanet(planet);
    close(false);
  }, []);

  return (
    <nav className='Mobile-Nav Main__Mobile-Nav' ref={navRef} >
      <ul className="Mobile-Nav__List">
        {planetsNames.map(planet => (
          <li className="Mobile-Nav__Item" key={planet}>
            <button
              type="button"
              className={`Mobile-Nav__Link Mobile-Nav__Link--${planet}`}
              onClick={() => handleNavLinkClick(planet)}
            >
              { planet }
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
