import React, { useRef, useContext, useEffect } from 'react'
import { GlobalContext } from '../GlobalProvider/GlobalProvider';
import gsap from 'gsap';
import { colors } from '../../api/colors';

export const PlanetDescriptionTitle = React.memo(
  () => {
    const { currentPlanet, isMobile } = useContext(GlobalContext);
    const titleRef = useRef();

    useEffect(() => {
      const delay = isMobile ? 1.5 : 0.2;
      const chars = Object.values(titleRef.current.children);
  
      const titleTween = gsap.from(
        chars,
        {
          color: colors[currentPlanet],
          delay,
          stagger: 0.2,
          ease: gsap.steps,
        }
      )
  
      return () => {
        titleTween.revert();
      }
    }, [currentPlanet, isMobile]);
  
    return (
      <h2
        className="Planet-Description__Title"
        ref={titleRef}
      >
        {currentPlanet.split('').map((char, i) => (
          <React.Fragment key={char + i}>
            {char === ' ' && ' '}
            <span style={{position: 'relative', display: 'inline-block'}}>
              {char}
            </span>
          </React.Fragment>
        ))}
      </h2>
    );
  }
);
