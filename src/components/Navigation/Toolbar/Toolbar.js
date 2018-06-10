import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const  toolbar = (props) =>{
console.log (props)
  return(
  <header className={classes.Toolbar}>
  <DrawerToggle clicked={props.toggle}/>
  <div className={classes.Logo}>
  <Logo />
</div>
  <div className={classes.DesktopOnly}>
    <nav>
      <NavigationItems/>
    </nav>
  </div>
</header>);
}
export default toolbar;
