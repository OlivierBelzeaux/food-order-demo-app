import React from 'react';

// Assets
import HeroImg from '../../assets/hero.jpg';

// Styles
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton.js';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React app - Food Order</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div
        className={classes.hero}
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      ></div>
    </>
  );
};

export default Header;
