import React from 'react';
import './TitleLined.css';

const TitleLined = ({myTitle}) => {
  return (
<div className="title-lined">
      <div className="line"></div>
      <span className="title-text">{myTitle}</span>
      <div className="line"></div>
    </div>
  );
};

export default TitleLined;
