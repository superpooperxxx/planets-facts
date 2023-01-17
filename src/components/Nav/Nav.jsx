import React from 'react';
import cn from 'classnames';
import './Nav.scss';
import planetsNames from '../../api/planetsNames';

export const Nav = React.memo(
  ({ setPlanet }) => {
    return (
      <nav className="Nav">
        <ul className="Nav__List">
          {planetsNames.map((planet) => (
            <li
              key={planet}
              className={cn(
                `Nav__Item Nav__Item--${planet}`,
                {
                  [`Nav__Item--${planet}-active`]: false,
                }
              )}
            >
              <button
                type="button"
                className="Nav__Link"
                onClick={() => setPlanet(planet)}
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
