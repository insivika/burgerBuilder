import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItem from '../NavigationItems/NavigationItems';
import Toggle from '../../Navigation/MenueToggle/MenueToggle'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Toggle toggleSideDrawer={props.toggleSideDrawer}/>
    <div className={classes.Logo}>
      <Logo/>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItem/>
    </nav>
  </header>
);

export default toolbar