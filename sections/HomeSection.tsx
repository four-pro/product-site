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

        <figure className='hero-banner'>
          <div
            className='img-holder one'
            style={{
              width: 341,
              height: 194,
              marginTop: '20px',
            }}
          >
            <img
              src='/test6.svg'
              //   width='270'
              //   height='300'
              alt='hero banner'
              className='img-cover'
              style={{ backgroundColor: 'white' }}
            />
          </div>

          <div
            className='img-holder two'
            style={{
              width: 281,
              height: 194,
              marginTop: '150px',
              //   marginLeft: '30px',
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
            src='./assets/images/hero-shape-1.svg'
            width='380'
            height='190'
            alt=''
            className='shape hero-shape-1'
          /> */}

          <img
            src='./assets/images/hero-shape-2.png'
            width='552'
            height='301'
            // style={{ marginBottom: '450px' }}
            alt=''
            className='shape hero-shape-2'
          />
        </figure>
      </div>
    </section>
  );
};
export default HomeSection;
