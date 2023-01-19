import { useContext } from 'react';
import './PageContent.scss';
import { PlanetNavMobile } from '../PlanetNavMobile/PlanetNavMobile';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';

export const PageContent = () => {
  const { currentPlanet } = useContext(GlobalContext);

  return (
    <section className='Page-Content Container'>
      {/* Seen only on Mobile */}
      <PlanetNavMobile /> 

      <div className="Page-Content__Main">
        <div>{ currentPlanet }</div>
        <div>
          <div>text</div>
          <div>nav</div>
        </div>
      </div>
      <ul className="Planet-Details"></ul>
    </section>
  );
};
