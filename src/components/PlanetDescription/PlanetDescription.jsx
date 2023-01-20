import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalProvider/GlobalProvider';
import './PlanetDescription.scss';

export const PlanetDescription = ({ wikiLink, text }) => {

  const { currentPlanet } = useContext(GlobalContext);

  return (
    <div className="Planet-Description">
      <h2 className="Planet-Description__Title">
        { currentPlanet }
      </h2>
      <p className="Planet-Description__Text">
        { text }
      </p>
      <p className="Planet-Description__Link-Container">
        Source :
        <a
          href={wikiLink}
          target="_blank"
          rel="noreferrer"
          className="Planet-Description__Wiki-Link"
        >
          Wikipedia
        </a>
      </p>
    </div>
  );
};
