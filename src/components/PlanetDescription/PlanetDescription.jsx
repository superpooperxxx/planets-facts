import React, { useContext, useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';
import './PlanetDescription.scss';

export const PlanetDescription = ({ wikiLink, text }) => {
  const { currentPlanet} = useContext(GlobalContext);
  const textRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const textTween = gsap.from(
      textRef.current,
      {
        opacity: 0,
        duration: 1,
        delay: 0.2,
      }
    )

    return () => {
      textTween.revert();
    }
  }, [text])

  useEffect(() => {
    const chars = Object.values(titleRef.current.children);

    const colors = {
      'Mercury': '#419ebb',
      'Venus': '#eda249',
      'Earth': '#6f2ed6',
      'Mars': '#d14c32',
      'Jupiter': '#ecad7a',
      'Saturn': '#fccb6b',
      'Uranus': '#1ec2a4',
      'Neptune': '#2d68f0',
    }

    const titleTween = gsap.from(
      chars,
      {
        color: colors[currentPlanet],
        stagger: 0.2,
        delay: 0.2,
        ease: gsap.steps,
      }
    )

    return () => {
      titleTween.revert();
    }
  }, [currentPlanet]);

  return (
    <div className="Planet-Description">
      <h2
        className="Planet-Description__Title"
        ref={titleRef}
      >
        {currentPlanet.split('').map(char => (
          <React.Fragment key={Math.random()}>
            {char === ' ' && ' '}
            <span style={{position: 'relative', display: 'inline-block'}}>
              {char}
            </span>
          </React.Fragment>
        ))}
      </h2>
      <p className="Planet-Description__Text" ref={textRef}>
        {text}
      </p>
      <p className="Planet-Description__Link-Container">
        Source :
        <a
          href={wikiLink}
          target="_blank"
          rel="noreferrer"
          className="Planet-Description__Wiki-Link"
        >
          Wikipedia
        </a>
      </p>
    </div>
  );
};
