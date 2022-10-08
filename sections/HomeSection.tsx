/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface HomeSectionProps {}

const HomeSection: React.FC<HomeSectionProps> = (props) => {
  return (
    <section
      className='section hero has-bg-image'
      id='home'
      aria-label='home'
      style={{
        backgroundImage: "url('./assets/images/hero-bg.svg')",
      }}
    >
      <div className='container'>
        <div className='hero-content'>
          <h1 className='h1 section-title'>
            Transpiring <span className='span'>Dreams</span> To Fly High
          </h1>

          <p className='hero-text'>
            Training and catering the needs of numerous nurses and allied
            healthcare professionals to pursue their aspiration of working in
            premier hospitals in India & Abroad or in pursuing higher studies.
          </p>

          <a href='#' className='btn has-before'>
            <span className='span'>Find courses</span>

            {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
          </a>
        </div>
        <div
        //   className='hero-banner'
        //   style={{
        //     position: 'relative',
        //     alignItems: 'center',
        //   }}
        >
          <div
            className='img-holder two'
            style={{
              borderRadius: '20px',
              placeItems: 'center',
              padding: '30px',
            }}
          >
            <img
              src='/test5.svg'
              //   width='240'
              //   height='370'
              alt='hero banner'
              className='img-cover'
              style={{ backgroundColor: 'white' }}
            />
          </div>
          {/* <img
            src='./assets/images/hero-shape-2.png'
            width='552'
            height='301'
            // style={{ marginBottom: '450px' }}
            alt=''
            className='shape hero-shape-2'
          /> */}
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
