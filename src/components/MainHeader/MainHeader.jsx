import React from 'react'
import './MainHeader.scss';

export const MainHeader = React.memo(
  () => {
    return (
      <h1 className="Main__Header">
        Planets of Solar system
      </h1>
    );
  }
);
