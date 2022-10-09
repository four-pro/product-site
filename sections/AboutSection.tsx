/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = (props) => {
  return (
    <section className='section about' id='about' aria-label='about'>
      <div className='container'>
        <figure className='about-banner'>
          <div
            className='img-holder'
            style={{
              backgroundColor: 'white',
              boxShadow: '0 10px 10px rgb(0 0 0 / 0.2)',
              marginTop: '50px',
            }}
            //  //style='--width: 520; --height: 370;'
          >
            <img
              src='/test6.svg'
              width='520'
              height='370'
              loading='lazy'
              alt='about banner'
              className='img-cover'
              style={{
                backgroundColor: 'white',
                boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
              }}
            />
          </div>

          <img
            src='./assets/images/about-shape-3.png'
            width='722'
            height='528'
            loading='lazy'
            alt=''
            className='shape about-shape-3'
          />
        </figure>

        <div className='about-content'>
          <p className='section-subtitle'>About Us</p>

          <h3 className='h3 section-title' style={{ fontSize: '35px' }}>
            Guided by Healthcare professionals with
            <span className='span'>more than two decades</span> of experience
          </h3>

          <p className='section-text'>
            We are a Healthcare professional training division of FourPro,
            catering to the training and furthering the needs of numerous nurses
            and allied healthcare professionals to pursue their aspiration of
            working in premier hospitals in India & Abroad or in pursuing higher
            studies.
          </p>
          <p className='section-text'>
            We strive to empower our nurses and allied health professionals for
            various assessment tests.
          </p>
          <p>Option of Courses to choose:</p>

          <ul className='about-list'>
            <li className='about-item'>
              <ArrowForwardIosIcon />

              <span className='span'>Comprehensive Courses</span>
            </li>

            <li className='about-item'>
              <ArrowForwardIosIcon />

              <span className='span'>Intermediate Course</span>
            </li>

            <li className='about-item'>
              <ArrowForwardIosIcon />

              <span className='span'>Crash Course</span>
            </li>
          </ul>

          <img
            src='./assets/images/about-shape-4.svg'
            width='100'
            height='100'
            loading='lazy'
            alt=''
            className='shape about-shape-4'
          />
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
