import React,{useState,useEffect,useCallback} from 'react'
import classes from './Row.module.css';
import MovieItem from './MovieItem';
import useApi from '../hooks/useApi';

function Row({title,fetchUrl,isLargeRow = false,isTvShow}) {
  //row_list 는 전체를 담는 container
  const [movies,setMovies] = useState([]);
  const {isLoading,error,sendRequest:fetchData} = useApi();

  const applyData = useCallback((data)=>{
    setMovies(data);
  },[])

  useEffect(()=>{
    fetchData({url:fetchUrl},applyData);
  },[]);

  return (
    <div className={classes.row_list}>
      <p className={classes.row_title}>{title}</p>
      <div className={`${classes.item_container} ${isLargeRow && classes.large_row }`}> 
        {movies.map((movie)=>{
          return <MovieItem key= {movie.id} movie={movie} isLargeRow={isLargeRow} isTvShow={isTvShow}></MovieItem>
        })}
      </div>
    </div>
  )
}

export default Row
