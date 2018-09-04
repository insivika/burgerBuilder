import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItem from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENUE</div>
    <div className={classes.Logo}>
      <Logo/>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItem/>
    </nav>
  </header>
);

export default toolbar