import React,{Component} from 'react'
import Aux from '../../../hoc/Aux/Auxi'
import Button from '../../UI/Button/Button'
class OrderSummary extends Component{
  componentWillUpdate(){
    console.log ("OrderSummary updates...")
  }
  render()
  {
    const ingredientSummary=Object.keys(this.props.ingredients).map(igKey=>{
      return  <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}</li>
    })
    //console.log(ingredientSummary);
    return(
      <Aux>
        <h3>Your Order</h3>
        <p>A burger with the following tasty ingredients!</p>
        <ul>
  {ingredientSummary}
        </ul>
        <p>current price = <strong>${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to check-out?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
  }


}

export default OrderSummary
