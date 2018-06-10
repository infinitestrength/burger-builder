import React,{Component} from 'react'
import Aux from '../../hoc/Aux/Auxi.js'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES={
  salad: 0.5,
  bacon: 0.3,
  meat: 0.4,
  cheese:0.2

}
class  BurgerBuilder extends Component {
  state = {
    ingredients:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0
    },
    totalPrice: 4,
    purchasable:false,
    purchasing:false

  }
updatePurchaseState(ingredients){
  const sum=Object.keys(ingredients)
  .map(igKey=>{
    return ingredients[igKey];
  })
  .reduce((sum,el) =>{
    return sum + el;
  },0)
  this.setState({purchasable: sum>0})
}
  addIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    const updatedCount= oldCount+1;
    const updatedIngredients ={
      ...this.state.ingredients
    };
    updatedIngredients[type]=updatedCount;
   const priceAddition = INGREDIENT_PRICES[type];
   const oldPrice = this.state.totalPrice;
   const newPrice = oldPrice + priceAddition;
   this.setState({totalPrice: newPrice,ingredients: updatedIngredients});
   this.updatePurchaseState(updatedIngredients);
  }
  removeIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    if(oldCount<=0)
    {return;}
    const updatedCount= oldCount-1;
    const updatedIngredients ={
      ...this.state.ingredients
    };
    updatedIngredients[type]=updatedCount;
   const pricededuction = INGREDIENT_PRICES[type];
   const oldPrice = this.state.totalPrice;
   const newPrice = oldPrice - pricededuction;
   this.setState({totalPrice: newPrice,ingredients: updatedIngredients})
   this.updatePurchaseState(updatedIngredients);
  }
  purchaseHandler=()=>{
    this.setState({purchasing:true});
  }
  purchaseCancelHandler=()=>{
    this.setState({purchasing:false});
  }
  purchaseContinueHandler=()=>{
    alert('Burger getting stacked...')
  }
  render() {
  console.log(this.state);
  const disabledInfo =
  {
    ...this.state.ingredients
  }
  for(let key in disabledInfo)
  {
    disabledInfo[key]=disabledInfo[key]<=0;
  }
    return(
    <Aux>
      <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
        <OrderSummary ingredients={this.state.ingredients}
          price={this.state.totalPrice}
        purchaseCancelled={this.purchaseCancelHandler}
      purchaseContinued={this.purchaseContinueHandler}/>
      </Modal>
      <Burger ingredients={this.state.ingredients}/>
      <BurgerControls
        ingredientRemoved={this.removeIngredientHandler}
        ingredientAdded={this.addIngredientHandler}
        disabled={disabledInfo}
        purchasable={this.state.purchasable}
         price={this.state.totalPrice}
         ordered={this.purchaseHandler}
         />
    </Aux>);
  }
}
export default BurgerBuilder;
