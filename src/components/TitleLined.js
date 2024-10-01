import React from 'react';
import './TitleLined.css';

const TitleLined = ({myTitle, id}) => {
  return (
<div className="title-lined" id={id}>
      <div className="line"></div>
      <span className="title-text">{myTitle}</span>
      <div className="line"></div>
    </div>
  );
};

export default TitleLined;
