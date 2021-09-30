import React from 'react'
import classes from './Banner.module.css';
import Button from '../UI/Button';

function Banner() {

  const truncate = (string,n) => {
    return string?.length > n ? string.substr(1,n-1) +'...' : string;
  }

  return (
    <header className={classes.banner} style={{backgroundRepeat:'no-repeat',backgroundImage:`url("https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&w=480&dpr=1")`, backgroundSize:'cover'}} >
      <div className={classes.banner_contents}>
        <h1 className={classes.title}>모던 패밀리</h1>
        <p className={classes.description}>{truncate('loremloremloremloremloremloremloremloremloremloremloremloremlorem',40)}</p>
        <div className={classes.actions}>
          <Button bgColor='#fff' color="#000">재생</Button>
          <Button bgColor='rgba(0,0,0,0.5)'>상세정보</Button>
        </div>  
      </div>
    </header>
  )
}

export default Banner
