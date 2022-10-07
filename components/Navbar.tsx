/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <header className='header' data-header>
      <div className='container'>
        <a href='#' className='logo'>
          {/* <img
                src='./assets/images/logo.svg'
                width='162'
                height='50'
                alt='FourPro logo'
              /> */}
          <h2 style={{ color: 'black' }}>FourPro</h2>
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

          <button className='header-action-btn' aria-label='cart' title='Cart'>
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
  );
};
export default Navbar;
