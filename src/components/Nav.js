import React,{useState,useEffect} from 'react'
import classes from './Nav.module.css';
import logo from '../images/logo.png';
import avatar from '../images/avatar.png';
import {Link} from 'react-router-dom';

function Nav() {
  const [NavShow,handleNavShow] = useState(false);

  const transitionNavBar = () => {
    if(window.scrollY > 90) { 
      handleNavShow(true);
    }else {
      handleNavShow(false);
    }
  }
  
  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    
    return ()=>{
      window.removeEventListener("scroll",transitionNavBar);
    }
  },[])
  return ( 
    <div className={`${classes.nav} ${NavShow && classes.bg_black}`}>
      <div className={classes.nav_items}>
        <Link className={classes.nav_logo} to='/'>
            <img src={logo}></img>
        </Link>
        <div className={classes.nav_avatar}>
            <img src={avatar}></img>
        </div>
      </div>

    </div>
  )
}

export default Nav
