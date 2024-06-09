import React from 'react';
import './home.css';
import SearchBox from './SearchBox'; 
import Explore from './Explore';
import ImageSlider from './ImageSlider'; 
import './explore.css';
import './imageSlider.css'; 

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="background-image">
          <h2>Where would you like to go?</h2>
          <SearchBox />
          <ImageSlider />
        </div>
         
      </div>
      <div className="explore-container">
        <Explore />
      </div>
    </div>
  );
}
