import React from 'react';
import './TitleLined.css';

const TitleLined = ({myTitle, id}) => {
  return (
    <h1 className="title-lined" id={id}>
      <div className="line"></div>
      <span className="title-text">{myTitle}</span>
      <div className="line"></div>
    </h1>
  );
};

export default TitleLined;
