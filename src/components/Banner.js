import React from 'react';
import BannerImg from "../assets/images/Banner2.webp";

function Banner() {
  return (
    <section className="banner">
    <img src={BannerImg} width="100%" alt="Benjamin Paret, ébéniste de L'Atelier Tarpin Bois"/>
  </section>
  );
}

export default Banner;
