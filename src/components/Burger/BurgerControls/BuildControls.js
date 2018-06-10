import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
  {label: 'Salad', kind:'salad'},
  {label: 'Bacon', kind:'bacon'},
  {label: 'Cheese', kind:'cheese'},
  {label: 'Meat', kind:'meat'}
];

const buildControls=(props)=>(
  <div className={classes.BuildControls}>
    <p>current price = <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl =>(
      <BuildControl
         key={ctrl.label}
         label={ctrl.label}
       removed={()=>props.ingredientRemoved(ctrl.kind)}
       added={()=>props.ingredientAdded(ctrl.kind)}
     disabled={props.disabled[ctrl.kind]}/>
    ))}
<button className={classes.OrderButton} disabled={!props.purchasable}
  onClick={props.ordered}>ORDER NOW</button>
  </div>

)

export default buildControls;
