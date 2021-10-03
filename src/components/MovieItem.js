import React,{useEffect,useState} from 'react'
import PropTypes, { string } from 'prop-types';
import classes from './MovieItem.module.css';
import { RatingView } from 'react-simple-star-rating'

let baseImageUrl = 'https://image.tmdb.org/t/p/w500'

function MovieItem({movie,isLargeRow}) { 
  const [showBack,setShowBack] = useState(false);
  
  const mouseEnterHandler = (e) => {
    setShowBack(true);
  }
  
  const mouseLeaveHandler = (e) => {
    setShowBack(false);
  }
  
  if(showBack){
    return (
      <div className={`${classes.item} ${isLargeRow && classes.large_poster}`} onMouseLeave={mouseLeaveHandler}> 
        <div className={classes.backface} >
          <div className={classes.backface_container}>
            <p className={classes.backface_title}>{movie.name || movie.title ||movie.original_title}</p>
            <p className={classes.backface_date}>{movie.release_date|| movie.first_air_date}</p>
            <RatingView ratingValue={movie.vote_average/2} stars={5}/>
          </div>
        </div>
        <img src={`${baseImageUrl}${movie.poster_path}`}></img>
    </div>  
    )
  }

  return (
    <div className={`${classes.item} ${isLargeRow && classes.large_poster}`} onMouseEnter={mouseEnterHandler}> 
      <img src={`${baseImageUrl}${movie.poster_path}`}></img>
    </div>
  )
}

export default React.memo(MovieItem)

// MovieItem.propTypes = {
//   id:PropTypes.number,
//   genre_ids:PropTypes.array,
//   original_title:PropTypes.string,
//   title:PropTypes.string,
//   overview:PropTypes.string,
//   release_date:PropTypes.string,
//   poster_path:PropTypes.string,
//   vote_average:PropTypes.number,
// }
