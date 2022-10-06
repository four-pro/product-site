import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <title>FourPro - The Best Program to Enroll for Exchange</title>
        <meta
          name='title'
          content='FourPro - The Best Program to Enroll for Exchange'
        />
        <meta
          name='description'
          content='This is an education html template made by codewithsadee'
        />

        <link rel='shortcut icon' href='./favicon.svg' type='image/svg+xml' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800&family=Poppins:wght@400;500&display=swap'
          rel='stylesheet'
        />
      </Head>

      <div id='top'>
        <header className='header' data-header>
          <div className='container'>
            <a href='#' className='logo'>
              {/* <img
                src='./assets/images/logo.svg'
                width='162'
                height='50'
                alt='FourPro logo'
              /> */}
            </a>

            <nav className='navbar' data-navbar>
              <div className='wrapper'>
                <a href='#' className='logo'>
                  <img
                    src='./assets/images/logo.svg'
                    width='162'
                    height='50'
                    alt='FourPro logo'
                  />
                </a>

                <button
                  className='nav-close-btn'
                  aria-label='close menu'
                  data-nav-toggler
                >
                  {/* <ion-icon name="close-outline" aria-hidden="true"></ion-icon> */}
                </button>
              </div>

              <ul className='navbar-list'>
                <li className='navbar-item'>
                  <a href='#home' className='navbar-link' data-nav-link>
                    Home
                  </a>
                </li>

                <li className='navbar-item'>
                  <a href='#about' className='navbar-link' data-nav-link>
                    About
                  </a>
                </li>

                <li className='navbar-item'>
                  <a href='#courses' className='navbar-link' data-nav-link>
                    Courses
                  </a>
                </li>

                <li className='navbar-item'>
                  <a href='#blog' className='navbar-link' data-nav-link>
                    Blog
                  </a>
                </li>

                <li className='navbar-item'>
                  <a href='#' className='navbar-link' data-nav-link>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className='header-actions'>
              <button
                className='header-action-btn'
                aria-label='toggle search'
                title='Search'
              >
                {/* <ion-icon name="search-outline" aria-hidden="true"></ion-icon> */}
              </button>

              <button
                className='header-action-btn'
                aria-label='cart'
                title='Cart'
              >
                {/* <ion-icon name="cart-outline" aria-hidden="true"></ion-icon> */}

                <span className='btn-badge'>0</span>
              </button>

              <a href='#' className='btn has-before'>
                <span className='span'>Try for free</span>

                {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
              </a>

              <button
                className='header-action-btn'
                aria-label='open menu'
                data-nav-toggler
              >
                {/* <ion-icon name="menu-outline" aria-hidden="true"></ion-icon> */}
              </button>
            </div>

            <div className='overlay' data-nav-toggler data-overlay></div>
          </div>
        </header>

        <main>
          <article>
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
                    The Best Program to <span className='span'>Enroll</span> for
                    Exchange
                  </h1>

                  <p className='hero-text'>
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                    qui officia deserunt mollit.
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
                      width: 270,
                      height: 300,
                    }}
                  >
                    <img
                      src='./assets/images/hero-banner-1.jpg'
                      width='270'
                      height='300'
                      alt='hero banner'
                      className='img-cover'
                    />
                  </div>

                  <div
                    className='img-holder two'
                    style={{
                      width: 240,
                      height: 370,
                    }}
                  >
                    <img
                      src='./assets/images/hero-banner-2.jpg'
                      width='240'
                      height='370'
                      alt='hero banner'
                      className='img-cover'
                    />
                  </div>

                  <img
                    src='./assets/images/hero-shape-1.svg'
                    width='380'
                    height='190'
                    alt=''
                    className='shape hero-shape-1'
                  />

                  <img
                    src='./assets/images/hero-shape-2.png'
                    width='622'
                    height='551'
                    alt=''
                    className='shape hero-shape-2'
                  />
                </figure>
              </div>
            </section>

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

            <section className='section about' id='about' aria-label='about'>
              <div className='container'>
                <figure className='about-banner'>
                  <div
                    className='img-holder'
                    //  //style='--width: 520; --height: 370;'
                  >
                    <img
                      src='./assets/images/about-banner.jpg'
                      width='520'
                      height='370'
                      loading='lazy'
                      alt='about banner'
                      className='img-cover'
                    />
                  </div>

                  <img
                    src='./assets/images/about-shape-1.svg'
                    width='360'
                    height='420'
                    loading='lazy'
                    alt=''
                    className='shape about-shape-1'
                  />

                  <img
                    src='./assets/images/about-shape-2.svg'
                    width='371'
                    height='220'
                    loading='lazy'
                    alt=''
                    className='shape about-shape-2'
                  />

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

                  <h2 className='h2 section-title'>
                    Over 10 Years in{' '}
                    <span className='span'>Distant learning</span> for Skill
                    Development
                  </h2>

                  <p className='section-text'>
                    Lorem ipsum dolor sit amet consectur adipiscing elit sed
                    eiusmod ex tempor incididunt labore dolore magna aliquaenim
                    ad minim.
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
