import './PlanetNavMobile.scss';
import cn from 'classnames'; 
import { useContext } from 'react';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';

const planetNavBtns = {
  overview: 'Overview',
  structure: 'Internal structure',
  geology: 'Surface geology',
};

export const PlanetNavMobile = ({ currentInfo, setInfo }) => {
  const { currentPlanet } = useContext(GlobalContext);
  
  return (
    <ul className="Planet-Nav-Mobile Container">
      {Object.entries(planetNavBtns).map(btn => {
        const [info, text] = btn;

        return (
          <li className="Planet-Nav-Mobile__Item" key={info}>
            <button
              type="button"
              onClick={() => setInfo(info)}
              className={cn(
                `Planet-Nav-Mobile__Btn Planet-Nav-Mobile__Btn--${currentPlanet}`,
                {
                  'Planet-Nav-Mobile__Btn--Active': currentInfo === info,
                }
              )}
            >
              { text }
            </button>
          </li>
        );
      })}
    </ul>
  );
};
