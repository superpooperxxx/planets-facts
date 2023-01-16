import cn from 'classnames';
import './Nav.scss';
import planetsNames from '../../api/planetsNames';

export const Nav = () => {
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
            <a href="#" className="Nav__Link">
              { planet }
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
