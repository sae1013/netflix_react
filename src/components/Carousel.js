import React from 'react'
import MovieItem from './MovieItem';
import classes from './Carousel.module.scss';
import {baseImageUrl} from '../config';

function Carousel({items}) {
  React.useEffect(()=>console.log('carousel 리렌더'));
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
