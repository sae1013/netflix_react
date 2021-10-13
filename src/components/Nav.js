import React,{useRef,useState,useEffect,useCallback} from 'react'
import classes from './Nav.module.scss';
import {ReactComponent as TmdbLogo} from '../images/logo_tmdb.svg';
import avatar from '../images/avatar.png';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Third Party

function Nav() {
  const [NavShow,handleNavShow] = useState(false);
  const history = useHistory();
  const searchRef = useRef();
  const searchBarShow = !history.location.pathname.startsWith('/search');
  
  const transitionNavBar = useCallback(() => {
    
    if(window.scrollY > 90) { 
      handleNavShow(true);  
    }else {
      handleNavShow(false); 
    }
  },[])

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar,{passive:true});
    return ()=>{
      window.removeEventListener('scroll',transitionNavBar);
    }
  },[])

  const searchSubmit = (e)=>{
    e.preventDefault();
    history.push(`/search?query=${searchRef.current.value}`);
    searchRef.current.value = "";
  }

  return ( 
    <div className={`${classes.nav} ${NavShow && classes.bg_black}`}>
      <div className={classes.nav_items}>
        <Link className={classes.nav_logo} to='/'>
            <TmdbLogo width="15rem"></TmdbLogo>
        </Link>
        {searchBarShow &&
          <div className={classes.search}>
            <form onSubmit = {searchSubmit}>
              <input ref = {searchRef}></input>
              <button><FontAwesomeIcon icon={faSearch} size='1x' /></button>
            </form>
          </div>
        }
        
        <div className={classes.nav_avatar}>
            <img src={avatar}></img>
        </div>
      </div>
    </div>
  )
}

export default Nav


