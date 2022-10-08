/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = (props) => {
  return (
    <section className='section about' id='about' aria-label='about'>
      <div className='container'>
        <figure className='about-banner'>
          <div className='img-holder' style={{ backgroundColor: 'white' }}>
            <div className='about-content'>
              <p className='section-subtitle'>About Us</p>

              <h2 className='h2 section-title'>
                Over 10 Years in <span className='span'>Distant learning</span>{' '}
                for Skill Development
              </h2>

              <p className='section-text'>
                Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
                ex tempor incididunt labore dolore magna aliquaenim ad minim.
              </p>

              <ul className='about-list'>
                <li className='about-item'>
                  {/* <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon> */}

                  <span className='span'>Expert Trainers</span>
                </li>

                <li className='about-item'>
                  {/* <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon> */}

                  <span className='span'>Online Remote Learning</span>
                </li>

                <li className='about-item'>
                  {/* <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon> */}

                  <span className='span'>Lifetime Access</span>
                </li>
              </ul>
            </div>
          </div>
        </figure>

        <div className='about-content'>
          <p className='section-subtitle'>About Us</p>

          <h2 className='h2 section-title'>
            Over 10 Years in <span className='span'>Distant learning</span> for
            Skill Development
          </h2>

          <p className='section-text'>
            Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex
            tempor incididunt labore dolore magna aliquaenim ad minim.
          </p>

          <ul className='about-list'>
            <li className='about-item'>
              {/* <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon> */}

              <span className='span'>Expert Trainers</span>
            </li>

            <li className='about-item'>
              {/* <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon> */}

              <span className='span'>Online Remote Learning</span>
            </li>

            <li className='about-item'>
              {/* <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon> */}

              <span className='span'>Lifetime Access</span>
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