import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../../components/UI/Button/Button'


class OrderSummary extends Component {

  componentWillUpdate(){
    console.log('[OrderSummery] willUpdate')
  }

  render(){

    const ingredientSummary = Object.keys(this.props.ingredients).map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}
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
          <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
          <p>Continue to checkout?</p>
        <Button btnType={'Danger'} clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button btnType={'Success'} clicked={this.props.purchaseContinued}>CONTINUE</Button>
     </Aux>

    )
  }

}

export default OrderSummary