/* eslint-disable @next/next/no-img-element */
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import type { NextPage } from 'next';
import Head from 'next/head';
import AboutSection from 'sections/AboutSection';
import HomeSection from 'sections/HomeSection';
import ProcessSection from 'sections/ProcessSection';
import WhatSection from 'sections/WhatSection';
import WhySection from 'sections/WhySection';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FourPro - Transpiring Dreams To Fly High</title>
      </Head>

      <div id='top'>

        <h1>Site is down for maintenance or for some other reason. If want to enable, contact.</h1>
        {/* <Navbar />
        <main>
          <article>
            <HomeSection />

            <AboutSection />

            <WhySection />

            <WhatSection />

            <ProcessSection />

            <section className='section stats' aria-label='stats'>
              <div className='container'>
                <ul className='grid-list'>
                  <li>
                    <div
                      className='stats-card' //style='--color: 170, 75%, 41%'
                    >
                      <h3 className='card-title'>29.3k</h3>

                      <p className='card-text'>Student Enrolled</p>
                    </div>
                  </li>

                  <li>
                    <div
                      className='stats-card'
                      //style='--color: 351, 83%, 61%'
                    >
                      <h3 className='card-title'>32.4K</h3>

                      <p className='card-text'>className Completed</p>
                    </div>
                  </li>

                  <li>
                    <div
                      className='stats-card' //style='--color: 260, 100%, 67%'
                    >
                      <h3 className='card-title'>100%</h3>

                      <p className='card-text'>Satisfaction Rate</p>
                    </div>
                  </li>

                  <li>
                    <div
                      className='stats-card' //style='--color: 42, 94%, 55%'
                    >
                      <h3 className='card-title'>354+</h3>

                      <p className='card-text'>Top Instructors</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </main>

        <Footer /> */}
      </div>
    </>
  );
};

export default Home;
