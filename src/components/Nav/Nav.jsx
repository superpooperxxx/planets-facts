import React, { useContext } from 'react';
import cn from 'classnames';
import './Nav.scss';
import { planetsNames } from '../../api/planetsInfo';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';

export const Nav = React.memo(
  () => {
    const { currentPlanet, setCurrentPlanet } = useContext(GlobalContext);

    return (
      <nav className="Nav">
        <ul className="Nav__List">
          {planetsNames.map(planet => (
            <li
              key={planet}
              className={cn(
                `Nav__Item Nav__Item--${planet}`,
                {
                  [`Nav__Item--${planet}-active`]: planet === currentPlanet,
                }
              )}
            >
              <button
                type="button"
                className="Nav__Link"
                onClick={() => setCurrentPlanet(planet)}
              >
                { planet }
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  },
);
