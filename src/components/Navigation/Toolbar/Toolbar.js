import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import Menue from '../NavigationItems/Menue/Menue'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Menue toggle={props.toggle}/>
    <Logo height="80%"/>
    <nav className={classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
  </header>
);

export default toolbar