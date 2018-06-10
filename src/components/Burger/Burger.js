import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'
const burger=(props)=>{
    let k=[];
//let y=0;
//const iray=Object.values(props);
Object.keys(props.ingredients).forEach(key =>{
  //map.set(key,iray[0][key]);
  for (let i = 0; i < props.ingredients[key]; i++) {
  //  console.log(i);
    k.push(<BurgerIngredient kind={key} key={key+i}/>);
//y+=1;
  }
//  console.log(key+" "+iray[0][key]);
})
//console.log("map "+map);
//console.log(ival);
/*Object.keys(props).forEach(key => {
    //map.set(key, props[key]);
    //console.log("key: "+key+" value: "+props[key]);
    Object.keys(props[key]).forEach(key1 =>{
  //  console.log("hello "+props[key][key1]);
        //console.log("key: "+props[key]+" value: "+props[key][key1]+" "+key+" "+key1);
  //      map.set( key1,props[key][key1]);
        for (let i = 0; i < props[key][key1]; i++) {
          console.log(i);
          k.push(<BurgerIngredient kind={key1} key={y}/>);
y+=1;
        }
    })
}
);*/
console.log(k.length);
if(k.length===0)
{
  k.push('choose ingredients!');
}

//console.log("ing map"+map.get('ingredients'));
  return(
    <div className={classes.Burger}>
      <BurgerIngredient kind="bread-top"/>
       {k}
      <BurgerIngredient kind="bread-bottom"/>


    </div>
  )
}
export default burger;
