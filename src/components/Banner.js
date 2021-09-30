import React,{useState,useEffect} from 'react'
import classes from './Banner.module.css';
import Button from '../UI/Button';
import axios from '../axios';

import requests from '../request';

function Banner() {
  const [movie,setMovie] = useState([]);
  Math.floor(Math.random()*4) 
  useEffect(()=>{
    const fetchData = async() => {
      try{
        const response = await axios.get(requests.fetchNetFlixOriginals);
        if(response.status == 200){
          const results =response.data.results;
          setMovie(results[Math.floor(Math.random()*results.length)])
        }else{
          throw Error
        }
      }catch(err){
        alert(err.message)
      }
      
    }
    fetchData();
  },[])
  
  const truncate = (string,n) => {
    return string?.length > n ? string.substr(0,n-1) +'...' : string;
  }

  return (
    <header className={classes.banner} style={{backgroundRepeat:'no-repeat',backgroundImage:`url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`, backgroundSize:'cover'}} >
      <div className={classes.banner_contents}>
        <h1 className={classes.title}>{movie.name||movie.original_name}</h1>
        <p className={classes.description}>{truncate(movie.overview,100)}</p>
        <div className={classes.actions}>
          <Button bgColor='#fff' color="#000">재생</Button>
          <Button bgColor='rgba(0,0,0,0.5)'>상세정보</Button>
        </div>  
      </div>
      <div className={classes.banner_fadeBottom}></div>
    </header>
  )
}

export default Banner
