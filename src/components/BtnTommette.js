import React from 'react';
import './BtnTommette.css'
import { Link } from 'react-router-dom';
import IconInsta from '../assets/icons/InstaRedSvgrepo.svg'

const BtnTommette = ({lineOne, linkTo, lineTwo, addIcon, anchor}) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleAnchor = () => {
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.scrollBy(0, -window.innerHeight * 0.04);
      } else {
        console.error('Element with id:', anchor, 'not found');
      }
    }, 0);
  };

  return (
    linkTo ? (
      <Link to={linkTo}
      onClick={anchor ? handleAnchor : handleClick}
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
