/* eslint-disable @next/next/no-img-element */
import Navbar from 'components/Navbar';
import type { NextPage } from 'next';
import Head from 'next/head';
import AboutSection from 'sections/AboutSection';
import HomeSection from 'sections/HomeSection';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FourPro - Transpiring Dreams To Fly High</title>
      </Head>

      <div id='top'>
        <Navbar />

        <main>
          <article>
            <HomeSection />

            <AboutSection />

            <section className='section category' aria-label='category'>
              <div className='container'>
                <p className='section-subtitle'>Categories</p>

                <h2 className='h2 section-title'>
                  Online <span className='span'>classNamees</span> For Remote
                  Learning.
                </h2>

                <p className='section-text'>
                  Consectetur adipiscing elit sed do eiusmod tempor.
                </p>

                <ul className='grid-list'>
                  <li>
                    <div
                      className='category-card'
                      //  //style='--color: 170, 75%, 41%'
                    >
                      <div className='card-icon'>
                        <img
                          src='./assets/images/category-1.svg'
                          width='40'
                          height='40'
                          loading='lazy'
                          alt='Online Degree Programs'
                          className='img'
                        />
                      </div>

                      <h3 className='h3'>
                        <a href='#' className='card-title'>
                          Online Degree Programs
                        </a>
                      </h3>

                      <p className='card-text'>
                        Lorem ipsum dolor consec tur elit adicing sed umod
                        tempor.
                      </p>

                      <span className='card-badge'>7 Courses</span>
                    </div>
                  </li>

                  <li>
                    <div
                      className='category-card'
                      //  //style='--color: 351, 83%, 61%'
                    >
                      <div className='card-icon'>
                        <img
                          src='./assets/images/category-2.svg'
                          width='40'
                          height='40'
                          loading='lazy'
                          alt='Non-Degree Programs'
                          className='img'
                        />
                      </div>

                      <h3 className='h3'>
                        <a href='#' className='card-title'>
                          Non-Degree Programs
                        </a>
                      </h3>

                      <p className='card-text'>
                        Lorem ipsum dolor consec tur elit adicing sed umod
                        tempor.
                      </p>

                      <span className='card-badge'>4 Courses</span>
                    </div>
                  </li>

                  <li>
                    <div
                      className='category-card'
                      //  //style='--color: 229, 75%, 58%'
                    >
                      <div className='card-icon'>
                        <img
                          src='./assets/images/category-3.svg'
                          width='40'
                          height='40'
                          loading='lazy'
                          alt='Off-Campus Programs'
                          className='img'
                        />
                      </div>

                      <h3 className='h3'>
                        <a href='#' className='card-title'>
                          Off-Campus Programs
                        </a>
                      </h3>

                      <p className='card-text'>
                        Lorem ipsum dolor consec tur elit adicing sed umod
                        tempor.
                      </p>

                      <span className='card-badge'>8 Courses</span>
                    </div>
                  </li>

                  <li>
                    <div
                      className='category-card'
                      //  //style='--color: 42, 94%, 55%'
                    >
                      <div className='card-icon'>
                        <img
                          src='./assets/images/category-4.svg'
                          width='40'
                          height='40'
                          loading='lazy'
                          alt='Hybrid Distance Programs'
                          className='img'
                        />
                      </div>

                      <h3 className='h3'>
                        <a href='#' className='card-title'>
                          Hybrid Distance Programs
                        </a>
                      </h3>

                      <p className='card-text'>
                        Lorem ipsum dolor consec tur elit adicing sed umod
                        tempor.
                      </p>

                      <span className='card-badge'>8 Courses</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section
              className='section course'
              id='courses'
              aria-label='course'
            >
              <div className='container'>
                <p className='section-subtitle'>Popular Courses</p>

                <h2 className='h2 section-title'>
                  Pick A Course To Get Started
                </h2>

                <ul className='grid-list'>
                  <li>
                    <div className='course-card'>
                      <figure
                        className='card-banner img-holder'
                        //  //style='--width: 370; --height: 220;'
                      >
                        <img
                          src='./assets/images/course-1.jpg'
                          width='370'
                          height='220'
                          loading='lazy'
                          alt='Build Responsive Real- World Websites with HTML and CSS'
                          className='img-cover'
                        />
                      </figure>

                      <div className='abs-badge'>
                        {/* <ion-icon name="time-outline" aria-hidden="true"></ion-icon> */}

                        <span className='span'>3 Weeks</span>
                      </div>

                      <div className='card-content'>
                        <span className='badge'>Beginner</span>

                        <h3 className='h3'>
                          <a href='#' className='card-title'>
                            Build Responsive Real- World Websites with HTML and
                            CSS
                          </a>
                        </h3>

                        <div className='wrapper'>
                          <div className='rating-wrapper'>
                            {/* <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon> */}
                          </div>

                          <p className='rating-text'>(5.0/7 Rating)</p>
                        </div>

                        <data className='price' value='29'>
                          $29.00
                        </data>

                        <ul className='card-meta-list'>
                          <li className='card-meta-item'>
                            {/* <ion-icon name="library-outline" aria-hidden="true"></ion-icon> */}

                            <span className='span'>8 Lessons</span>
                          </li>

                          <li className='card-meta-item'>
                            {/* <ion-icon name="people-outline" aria-hidden="true"></ion-icon> */}

                            <span className='span'>20 Students</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='course-card'>
                      <figure
                        className='card-banner img-holder'
                        //style='--width: 370; --height: 220;'
                      >
                        <img
                          src='./assets/images/course-2.jpg'
                          width='370'
                          height='220'
                          loading='lazy'
                          alt='Java Programming MasterclassName for Software Developers'
                          className='img-cover'
                        />
                      </figure>

                      <div className='abs-badge'>
                        {/* <ion-icon name="time-outline" aria-hidden="true"></ion-icon> */}

                        <span className='span'>8 Weeks</span>
                      </div>

                      <div className='card-content'>
                        <span className='badge'>Advanced</span>

                        <h3 className='h3'>
                          <a href='#' className='card-title'>
                            Java Programming MasterclassName for Software
                            Developers
                          </a>
                        </h3>

                        <div className='wrapper'>
                          <div className='rating-wrapper'>
                            {/* <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon> */}
                          </div>

                          <p className='rating-text'>(4.5 /9 Rating)</p>
                        </div>

                        <data className='price' value='49'>
                          $49.00
                        </data>

                        <ul className='card-meta-list'>
                          <li className='card-meta-item'>
                            {/* <ion-icon name="library-outline" aria-hidden="true"></ion-icon> */}

                            <span className='span'>15 Lessons</span>
                          </li>

                          <li className='card-meta-item'>
                            {/* <ion-icon name="people-outline" aria-hidden="true"></ion-icon> */}

                            <span className='span'>35 Students</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='course-card'>
                      <figure
                        className='card-banner img-holder'
                        //style='--width: 370; --height: 220;'
                      >
                        <img
                          src='./assets/images/course-3.jpg'
                          width='370'
                          height='220'
                          loading='lazy'
                          alt='The Complete Camtasia Course for Content Creators'
                          className='img-cover'
                        />
                      </figure>

                      <div className='abs-badge'>
                        {/* <ion-icon name="time-outline" aria-hidden="true"></ion-icon> */}

                        <span className='span'>3 Weeks</span>
                      </div>

                      <div className='card-content'>
                        <span className='badge'>Intermediate</span>

                        <h3 className='h3'>
                          <a href='#' className='card-title'>
                            The Complete Camtasia Course for Content Creators
                          </a>
                        </h3>

                        <div className='wrapper'>
                          <div className='rating-wrapper'>
                            {/* <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon> */}
                          </div>

                          <p className='rating-text'>(4.9 /7 Rating)</p>
                        </div>

                        <data className='price' value='35'>
                          $35.00
                        </data>

                        <ul className='card-meta-list'>
                          <li className='card-meta-item'>
                            {/* <ion-icon name="library-outline" aria-hidden="true"></ion-icon> */}

                            <span className='span'>13 Lessons</span>
                          </li>

                          <li className='card-meta-item'>
                            {/* <ion-icon name="people-outline" aria-hidden="true"></ion-icon> */}

                            <span className='span'>18 Students</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>

                <a href='#' className='btn has-before'>
                  <span className='span'>Browse more courses</span>

                  {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
                </a>
              </div>
            </section>

            <section
              className='video has-bg-image'
              aria-label='video'
              //style="background-image: url('./assets/images/video-bg.png')"
            >
              <div className='container'>
                <div className='video-card'>
                  <div
                    className='video-banner img-holder has-after'
                    //style='--width: ; --height: ;'
                  >
                    <img
                      src='./assets/images/video-banner.jpg'
                      width='970'
                      height='550'
                      loading='lazy'
                      alt='video banner'
                      className='img-cover'
                    />

                    <button className='play-btn' aria-label='play video'>
                      {/* <ion-icon name="play" aria-hidden="true"></ion-icon> */}
                    </button>
                  </div>

                  <img
                    src='./assets/images/video-shape-1.png'
                    width='1089'
                    height='605'
                    loading='lazy'
                    alt=''
                    className='shape video-shape-1'
                  />

                  <img
                    src='./assets/images/video-shape-2.png'
                    width='158'
                    height='174'
                    loading='lazy'
                    alt=''
                    className='shape video-shape-2'
                  />
                </div>
              </div>
            </section>

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

            <section
              className='section blog has-bg-image'
              id='blog'
              aria-label='blog'
              //style="background-image: url('./assets/images/blog-bg.svg')"
            >
              <div className='container'>
                <p className='section-subtitle'>Latest Articles</p>

                <h2 className='h2 section-title'>Get News With Eduweb</h2>

                <ul className='grid-list'>
                  <li>
                    <div className='blog-card'>
                      <figure
                        className='card-banner img-holder has-after'
                        //style='--width: 370; --height: 370;'
                      >
                        <img
                          src='./assets/images/blog-1.jpg'
                          width='370'
                          height='370'
                          loading='lazy'
                          alt='Become A Better Blogger: Content Planning'
                          className='img-cover'
                        />
                      </figure>

                      <div className='card-content'>
                        <a href='#' className='card-btn' aria-label='read more'>
                          {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
                        </a>

                        <a href='#' className='card-subtitle'>
                          Online
                        </a>

                        <h3 className='h3'>
                          <a href='#' className='card-title'>
                            Become A Better Blogger: Content Planning
                          </a>
                        </h3>

                        <ul className='card-meta-list'>
                          <li className='card-meta-item'>
                            {/* <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon> */}

                            <span className='span'>Oct 10, 2021</span>
                          </li>

                          <li className='card-meta-item'>
                            {/* <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon> */}

                            <span className='span'>Com 09</span>
                          </li>
                        </ul>

                        <p className='card-text'>
                          Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='blog-card'>
                      <figure
                        className='card-banner img-holder has-after'
                        //style='--width: 370; --height: 370;'
                      >
                        <img
                          src='./assets/images/blog-2.jpg'
                          width='370'
                          height='370'
                          loading='lazy'
                          alt='Become A Better Blogger: Content Planning'
                          className='img-cover'
                        />
                      </figure>

                      <div className='card-content'>
                        <a href='#' className='card-btn' aria-label='read more'>
                          {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
                        </a>

                        <a href='#' className='card-subtitle'>
                          Online
                        </a>

                        <h3 className='h3'>
                          <a href='#' className='card-title'>
                            Become A Better Blogger: Content Planning
                          </a>
                        </h3>

                        <ul className='card-meta-list'>
                          <li className='card-meta-item'>
                            {/* <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon> */}

                            <span className='span'>Oct 10, 2021</span>
                          </li>

                          <li className='card-meta-item'>
                            {/* <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon> */}

                            <span className='span'>Com 09</span>
                          </li>
                        </ul>

                        <p className='card-text'>
                          Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='blog-card'>
                      <figure
                        className='card-banner img-holder has-after'
                        //style='--width: 370; --height: 370;'
                      >
                        <img
                          src='./assets/images/blog-3.jpg'
                          width='370'
                          height='370'
                          loading='lazy'
                          alt='Become A Better Blogger: Content Planning'
                          className='img-cover'
                        />
                      </figure>

                      <div className='card-content'>
                        <a href='#' className='card-btn' aria-label='read more'>
                          {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
                        </a>

                        <a href='#' className='card-subtitle'>
                          Online
                        </a>

                        <h3 className='h3'>
                          <a href='#' className='card-title'>
                            Become A Better Blogger: Content Planning
                          </a>
                        </h3>

                        <ul className='card-meta-list'>
                          <li className='card-meta-item'>
                            {/* <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon> */}

                            <span className='span'>Oct 10, 2021</span>
                          </li>

                          <li className='card-meta-item'>
                            {/* <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon> */}

                            <span className='span'>Com 09</span>
                          </li>
                        </ul>

                        <p className='card-text'>
                          Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>

                <img
                  src='./assets/images/blog-shape.png'
                  width='186'
                  height='186'
                  loading='lazy'
                  alt=''
                  className='shape blog-shape'
                />
              </div>
            </section>
          </article>
        </main>

        <footer
          className='footer'
          //style="background-image: url('./assets/images/footer-bg.png')"
        >
          <div className='footer-top section'>
            <div className='container grid-list'>
              <div className='footer-brand'>
                <a href='#' className='logo'>
                  <img
                    src='./assets/images/logo-light.svg'
                    width='162'
                    height='50'
                    alt='FourPro logo'
                  />
                </a>

                <p className='footer-brand-text'>
                  Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm
                  tempor incidid unt labore dolore.
                </p>

                <div className='wrapper'>
                  <span className='span'>Add:</span>

                  <address className='address'>
                    70-80 Upper St Norwich NR2
                  </address>
                </div>

                <div className='wrapper'>
                  <span className='span'>Call:</span>

                  <a href='tel:+011234567890' className='footer-link'>
                    +01 123 4567 890
                  </a>
                </div>

                <div className='wrapper'>
                  <span className='span'>Email:</span>

                  <a href='mailto:info@eduweb.com' className='footer-link'>
                    info@eduweb.com
                  </a>
                </div>
              </div>

              <ul className='footer-list'>
                <li>
                  <p className='footer-list-title'>Online Platform</p>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    About
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    Courses
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    Instructor
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    Events
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    Instructor Profile
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    Purchase Guide
                  </a>
                </li>
              </ul>

              <ul className='footer-list'>
                <li>
                  <p className='footer-list-title'>Links</p>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    Contact Us
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    Gallery
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    News & Articles
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    FAQ
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    Sign In/Registration
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    Coming Soon
                  </a>
                </li>
              </ul>

              <div className='footer-list'>
                <p className='footer-list-title'>Contacts</p>

                <p className='footer-list-text'>
                  Enter your email address to register to our newsletter
                  subscription
                </p>

                <form action='' className='newsletter-form'>
                  <input
                    type='email'
                    name='email_address'
                    placeholder='Your email'
                    required
                    className='input-field'
                  />

                  <button type='submit' className='btn has-before'>
                    <span className='span'>Subscribe</span>

                    {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
                  </button>
                </form>

                <ul className='social-list'>
                  <li>
                    <a href='#' className='social-link'>
                      {/* <ion-icon name="logo-facebook"></ion-icon> */}
                    </a>
                  </li>

                  <li>
                    <a href='#' className='social-link'>
                      {/* <ion-icon name="logo-linkedin"></ion-icon> */}
                    </a>
                  </li>

                  <li>
                    <a href='#' className='social-link'>
                      {/* <ion-icon name="logo-instagram"></ion-icon> */}
                    </a>
                  </li>

                  <li>
                    <a href='#' className='social-link'>
                      {/* <ion-icon name="logo-twitter"></ion-icon> */}
                    </a>
                  </li>

                  <li>
                    <a href='#' className='social-link'>
                      {/* <ion-icon name="logo-youtube"></ion-icon> */}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='footer-bottom'>
            <div className='container'>
              <p className='copyright'>
                Copyright 2022 All Rights Reserved by{' '}
                <a href='#' className='copyright-link'>
                  codewithsadee
                </a>
              </p>
            </div>
          </div>
        </footer>

        <a
          href='#top'
          className='back-top-btn'
          aria-label='back top top'
          data-back-top-btn
        >
          {/* <ion-icon name="chevron-up" aria-hidden="true"></ion-icon> */}
        </a>
      </div>
    </>
  );
};

export default Home;
