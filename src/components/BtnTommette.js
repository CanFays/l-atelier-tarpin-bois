import React from 'react';
import './BtnTommette.css'
import { Link } from 'react-router-dom';

const BtnTommette = ({lineOne, linkTo, lineTwo}) => {
  return (
    <Link to={linkTo} className="btn-tommette">
      {lineOne}
      {lineTwo && <br />}
      {lineTwo && lineTwo}
    </Link>
  );
};

export default BtnTommette;
