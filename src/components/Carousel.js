import React from 'react'
import MovieItem from './MovieItem';
import classes from './Carousel.module.scss';


function Carousel({items}) {
  
  return (
    <div className={classes.container}>
      {items.map((item)=>{
        return (
          <MovieItem key={item.id} movie={item}></MovieItem>
        )
      })}
    </div>
  )
}

export default Carousel
