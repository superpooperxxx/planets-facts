import React from 'react';
import './PlanetDetails.scss';

export const PlanetDetails = React.memo(
  ({ details }) => {
    return (
      <ul className="Planet-Details">
        {Object.entries(details).map(detail => {
          const [title, info] = detail;
  
          return (
            <li className="Planet-Details__Detail" key={title}>
              <h3 className="Planet-Details__Detail-Title">{ title }</h3>
              <p className="Planet-Details__Detail-Info">{ info }</p>
            </li>
          );
        })}
      </ul>
    );
  }
);
