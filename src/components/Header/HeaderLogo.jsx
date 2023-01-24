import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';

export const HeaderLogo = React.memo(
  () => {
    const logoRef = useRef();

    useEffect(() => {
      const chars = Object.values(logoRef.current.children);
  
      const tween = gsap.to(
        chars,
        {
          transform: 'translateY(0)',
          stagger: 0.05,
          delay: 1,
        }
      )
  
      return () => {
        tween.revert();
      }
    }, []);

    return (
      <a
        href="/planets-facts"
        className="Header__Logo"
        ref={logoRef}
      >
        {'The planets'.split('').map((char, i) => (
          <React.Fragment key={char + i}>
            {char === ' ' && ' '}
            <div style={{position: 'relative', display: 'inline-block'}}>
              {char}
            </div>
          </React.Fragment>
        ))}
      </a>
    );
  }
)
