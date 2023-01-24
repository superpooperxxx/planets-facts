import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import './PlanetDescription.scss';
import { PlanetDescriptionTitle } from './PlanetDescriptionTitle';

export const PlanetDescription = ({ wikiLink, text }) => {
  const textRef = useRef();

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

  return (
    <div className="Planet-Description">
      <PlanetDescriptionTitle />
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
