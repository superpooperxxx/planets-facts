import React from 'react';
import { useContext, useEffect, useState } from 'react';
import './PageContent.scss';
import { PlanetNavMobile } from '../PlanetNavMobile/PlanetNavMobile';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';
import { PlanetDetails } from '../PlanetDetails/PlanetDetails';
import { planetsInfo } from '../../api/planetsInfo';
import { PlanetImage } from '../PlanetImage/PlanetImage';
import { PlanetDescription } from '../PlanetDescription/PlanetDescription';
import { PlanetNav } from '../PlanetNav/PlanetNav';

export const PageContent = React.memo(
  () => {
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
          <article className="Page-Content__Main">
            <PlanetImage currentInfo={currentInfo} />

            <div className="Page-Content__Info">
              <PlanetDescription
                wikiLink={planetsInfo[currentPlanet].wikiLink}
                text={planetsInfo[currentPlanet][currentInfo].text}
              />
              
              {!isMobile && (
                <PlanetNav 
                  currentInfo={currentInfo}
                  setInfo={setCurrentInfo}
                />
              )}
            </div>
          </article>
          
          <PlanetDetails details={planetsInfo[currentPlanet].details} />
        </div>
      </section>
    );
  }
);
