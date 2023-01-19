import React, { useContext }  from 'react';
import './MobileNav.scss';
import cn from 'classnames';
import { planetsNames } from '../../api/planetsInfo';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';

export const MobileNav = ({ isOpened, close }) => {
  const { setCurrentPlanet } = useContext(GlobalContext);

  const handleNavLinkClick = (planet) => {
    setCurrentPlanet(planet);
    close(false);
  };

  return (
    <nav className={cn(
      'Mobile-Nav Main__Mobile-Nav',
      {
        'Mobile-Nav--Hidden': !isOpened,
      },
    )}>
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
