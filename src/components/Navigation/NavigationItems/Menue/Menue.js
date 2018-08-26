import React from 'react';
import Aux from '../../../../hoc/Aux';

const menue = (props) => (
  <Aux>
    <h3 onClick={props.toggle}>Menue</h3>
  </Aux>
);

export default menue;