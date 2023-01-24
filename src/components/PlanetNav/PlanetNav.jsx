import cn from 'classnames';
import { useContext } from 'react';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';
import './PlanetNav.scss';

const planetNavBtns = {
  overview: 'overview',
  structure: 'internal structure',
  surface: 'surface geology',
};

export const PlanetNav = ({ currentInfo, setInfo }) => {
  const { currentPlanet } = useContext(GlobalContext);

  return (
    <ul className="Planet-Nav">
      {Object.entries(planetNavBtns).map(btn => {
        const [info, text] = btn;

        return (
          <li className="Planet-Nav__Item" key={text}>
            <button
              type="button"
              className={cn(
                'Planet-Nav__Btn',
                {
                  [`Planet-Nav__Btn--${currentPlanet}`]: currentInfo === info,
                },
              )}
              onClick={() => setInfo(info)}
            >
              { text }
            </button>
          </li>
        );
      })}
    </ul>
  );
};
