import React from 'react';
import home from '../../../assets/images/home2.jpg';
import business from '../../../assets/images/business.jpg';

const Snippet = () => {
  return (
    <div className='snippet'>
      <div className='snippet__images'>
        <div className='snippet__images-home'>
          <img src={home} alt='' />
          <div className='snippet__images-text'>
            <div className='half-container'>
              <h2>For home</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse maximus porttitor tortor in malesuada. Sed efficitur
                ac magna.
              </p>
            </div>
          </div>
        </div>
        <div className='snippet__images-business'>
          <img src={business} alt='' />
          <div className='snippet__images-text business'>
            <div className='half-container'>
              <h2>For business</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse maximus porttitor tortor in malesuada. Sed efficitur
                ac magna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snippet;
