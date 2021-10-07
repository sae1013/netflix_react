import React,{useEffect,useState} from 'react'
import PropTypes, { string } from 'prop-types';
import {useHistory} from 'react-router-dom';
import classes from './MovieItem.module.css';
import { RatingView } from 'react-simple-star-rating'
import poster_null_image from '../images/poster_null.svg';

let baseImageUrl = 'https://image.tmdb.org/t/p/w500'

function MovieItem({movie,isLargeRow = false}) { 
  const [showBack,setShowBack] = useState(false);
  const history = useHistory();
  
  const mouseEnterHandler = (e) => {
    setShowBack(true);
  }
  
  const mouseLeaveHandler = (e) => {
    setShowBack(false);
  }
  
  const itemClickHandler = (e) => {
    history.push(`/movie/${movie.id}`)  
  }

  return (
    <div className={`${classes.item} ${isLargeRow && classes.large_poster}`} onClick={itemClickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}> 
      {showBack && (<div className={classes.backface} >
          <div className={classes.backface_container}>
            <p className={classes.backface_title}>{movie.name || movie.title ||movie.original_title}</p>
            <p className={classes.backface_date}>{movie.release_date|| movie.first_air_date || movie.air_date} </p>
            <RatingView ratingValue={movie.vote_average/2} stars={5}/>
          </div>
        </div>)}
      {movie.poster_path ?<img src={`${baseImageUrl}${movie.poster_path}`}></img>
      : <img style={{objectFit:'cover'}} src={poster_null_image}></img>}
      
    </div>
  )
}

export default React.memo(MovieItem)