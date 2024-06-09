import React from 'react';
import './imageSlider.css';

export default function ImageSlider() {
  return (
    <div className="slider-container">
      <div className="slider">
        <img src="images/tajmahal.jpg" alt="Taj Mahal" />
        <img src="images/charminaer.jpg" alt="Charminar" />
        <img src="images/araku.jpg" alt="Araku" />
      </div>
    </div>
  );
}
