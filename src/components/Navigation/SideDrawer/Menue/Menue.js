import React from 'react';
import classes from './Menue.css'

const menue = (props) => (

  <div className={classes.Menue} onClick={props.toggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>

);

export default menue;