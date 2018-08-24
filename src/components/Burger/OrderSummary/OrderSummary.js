import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../../components/UI/Button/Button'


const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
          </li>
      );
    })

    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicous burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Continue to checkout?</p>
        <Button btnType={'Danger'} clicked={props.purchaseCanceled}>CANCEL</Button>
        <Button btnType={'Success'} clicked={props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
};

export default orderSummary