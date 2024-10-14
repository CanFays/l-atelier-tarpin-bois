import React from 'react';
import './BtnTommette.css'
import { Link } from 'react-router-dom';
import IconInsta from '../assets/icons/InstaRedSvgrepo.svg'

const BtnTommette = ({lineOne, linkTo, lineTwo, addIcon, anchor}) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    linkTo ? (
      <Link to={anchor ? `${linkTo}#${anchor}` : linkTo}
      onClick={!anchor ? handleClick : undefined}
      className="btn-tommette">
        {lineOne}
        {lineTwo && <br />}
        {lineTwo && lineTwo}
        </Link>
       ) : (
        <div className='btn-tommette'>
          {lineOne}
          {lineTwo && <br />}
          {lineTwo && lineTwo}
          {addIcon && (<img src={IconInsta} alt="Aller sur l'Instagram de Tarpin Bois"></img>)}
        </div>)
  )
};

export default BtnTommette;
