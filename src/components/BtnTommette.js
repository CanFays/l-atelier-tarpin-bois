import React from 'react';
import './BtnTommette.css'
import { Link } from 'react-router-dom';
import IconInsta from '../assets/icons/InstaRedSvgrepo.svg'

const BtnTommette = ({lineOne, linkTo, lineTwo, addIcon}) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    linkTo ?
      <Link to={linkTo} className="btn-tommette" onClick={handleClick}>
        {lineOne}
        {lineTwo && <br />}
        {lineTwo && lineTwo}
      </Link>: <div className='btn-tommette'>
                                {lineOne}
                                {lineTwo && <br />}
                                {lineTwo && lineTwo}
                                {addIcon && (<img src={IconInsta} alt="Aller sur l'Instagram de Tarpin Bois"></img>)}
                              </div>
  )
};

export default BtnTommette;

  // addIcon ? (
    //    <div className='btn-tommette'>
    //      {lineOne}
    //      <img src={IconInsta} alt="Aller sur l'Instagram de Tarpin Bois"></img>
    //    </div>
    //    ) : <Link to={linkTo} className="btn-tommette">
    //   {lineOne}
    //   {lineTwo && <br />}
    //   {lineTwo && lineTwo}
    // </Link>}
