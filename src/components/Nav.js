import React,{useState,useEffect} from 'react'
import classes from './Nav.module.css';
import logo from '../images/logo.png';
import avatar from '../images/avatar.png';

function Nav() {
  const [NavShow,handleNavShow] = useState(true);

  const transitionNavBar = () => {
    if(window.scrollY > 90) {
      handleNavShow(false);
    }else {
      handleNavShow(true);
    }
  }
  useEffect(()=>{
    const scrollEvent = window.addEventListener("scroll",transitionNavBar);
    
    return ()=>{
      window.removeEventListener("scroll",scrollEvent);
    }
  },[])
  return ( 
    <div className={`${classes.nav} ${!NavShow && classes.bg_black}`}>
      <div className={classes.nav_items}>
        <div className={classes.nav_logo}>
            <img src={logo}></img>
        </div>
        <div className={classes.nav_avatar}>
            <img src={avatar}></img>
        </div>
      </div>

    </div>
  )
}

export default Nav
