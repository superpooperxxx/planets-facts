import { useContext, useEffect, useState } from 'react';
import './PageContent.scss';
import { PlanetNavMobile } from '../PlanetNavMobile/PlanetNavMobile';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';

export const PageContent = () => {
  const [currentInfo, setCurrentInfo] = useState('overview');
  const { currentPlanet, isMobile } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentInfo('overview');
  }, [currentPlanet]);

  return (
    <section className='Page-Content'>
      {isMobile && (
        <PlanetNavMobile
          currentInfo={currentInfo}
          setInfo={setCurrentInfo}
        />
      )}

      <div className="Container">
        <div className="Page-Content__Main">
          <div>{ currentPlanet }</div>
          <div>
            <div>{currentInfo}</div>
            <div>nav</div>
          </div>
        </div>
        <ul className="Planet-Details"></ul>
      </div>
    </section>
  );
};
