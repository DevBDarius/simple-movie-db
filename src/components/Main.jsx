import React from 'react';
import Searchbox from './Searchbox';
import logo from '../logo.svg';

const Header = () => {
  return (
    <main class="main__wrapper">
      <img src={logo} alt="logo" className='main__logo' />
      <h1 class="main__heading">
        Search any movie, instantly
      </h1>
      <Searchbox/>
    </main>
  );
}

export default Header;
