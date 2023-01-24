import React, { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import cn from 'classnames';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';
import { Nav } from "../Nav/Nav";
import "./Header.scss";

export const Header = ({ isOpened, handleMobileNav }) => {
  const { isMobile } = useContext(GlobalContext);
  const logoRef = useRef();

  useEffect(() => {

    const chars = Object.values(logoRef.current.children);

    const tween = gsap.from(
      chars,
      {
        yPercent: -100,
        stagger: 0.05,
      }
    )

    return () => {
      tween.revert();
    }
  }, []);

  return (
    <header className="Header">
      <div className="Container Header__Container">
        <div className="Header__Logo-Container">
          <a
            href="/"
            className="Header__Logo"
            ref={logoRef}
          >
            {'The planets'.split('').map(char => (
              <React.Fragment key={Math.random()}>
                {char === ' ' && ' '}
                <div style={{position: 'relative', display: 'inline-block'}}>
                  {char}
                </div>
              </React.Fragment>
            ))}
          </a>
        </div>

        {!isMobile && <Nav />}

        {isMobile && (
          <button
            type="button"
            className={cn(
              'Header__Menu-btn',
              {
                'Header__Menu-btn--active': isOpened,
              }
            )}
            aria-label="button to open navigation"
            onClick={handleMobileNav}
          ></button>
        )}
      </div>
    </header>
  );
};
