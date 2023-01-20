import './PlanetNavMobile.scss';
import cn from 'classnames'; 
import { useContext } from 'react';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';

const planetNavBtns = ['overview', 'structure', 'geology'];

export const PlanetNavMobile = ({ currentInfo, setInfo }) => {
  const { currentPlanet } = useContext(GlobalContext);

  return (
    <ul className="Planet-Nav-Mobile Container">
      {planetNavBtns.map(btn => (
        <li className="Planet-Nav-Mobile__Item" key={btn}>
          <button
            type="button"
            onClick={() => setInfo(btn)}
            className={cn(
              `Planet-Nav-Mobile__Btn Planet-Nav-Mobile__Btn--${currentPlanet}`,
              {
                'Planet-Nav-Mobile__Btn--Active': currentInfo === btn,
              }
            )}
          >
            { btn }
          </button>
        </li>
      ))}
    </ul>
  );
};
