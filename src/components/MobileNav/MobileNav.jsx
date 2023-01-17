import React  from 'react';
import './MobileNav.scss';
import cn from 'classnames';

export const MobileNav = React.memo(
  ({
    planets,
    opened,
    handleNavClose,
    setPlanet
  }) => {
  
    const handleLinkClick = (planet) => {
      handleNavClose(false);
      setPlanet(planet);
    }
    
    return (
      <nav className={cn(
        'Mobile-Nav Main__Mobile-Nav',
        {
          'Mobile-Nav--Hidden': !opened,
        },
      )}>
        <ul className="Mobile-Nav__List">
          {planets.map(planet => (
            <li className="Mobile-Nav__Item" key={planet}>
              <button
                type="button"
                className={`Mobile-Nav__Link Mobile-Nav__Link--${planet}`}
                onClick={() => handleLinkClick(planet)}
              >
                { planet }
              </button>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
);
