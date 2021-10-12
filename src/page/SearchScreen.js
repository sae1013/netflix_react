import React, {useRef, useEffect, useState, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useApi from "../hooks/useApi";
import requests from "../request";
import MovieItem from "../components/MovieItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {ReactComponent as LoadingSpinner} from '../images/spinner.svg';
import classes from "./SearchScreen.module.scss";

function SearchScreen() {
  const history = useHistory();
  const location = useLocation();
  const queryString = location.search.split("=")[1];
  const [movies, setMovies] = useState([]);
  const [searchInput,setSearchInput] = useState(decodeURI(queryString)); // 맨처음 입력을 쿼리스트링으로 이어주기.
  const searchRef = useRef(null);
  const [isValid,setValid] = useState(true);
  const { isLoading, error, sendRequest: fetchData } = useApi();

  const applyData = useCallback((data) => {
    setMovies(data);
  }, []);
  
  const searchSubmit = (e) => {
    e.preventDefault();
    if(searchInput === ""){ 
      setValid(false);
      return
    }
    
    setValid(true);
    history.replace(`/search?query=${searchInput}`)
  }

  const searchInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    fetchData({ url: requests.fetchKeyword(queryString) }, applyData);
  }, [location]);

  let content;
  
  if(isLoading){
    content = <LoadingSpinner width="15rem" height="20rem" fill="#ee3000"/>
  }
  else if(error){
    content = (
      <>
      <p>데이터를 불러오는중 에러가 발생했습니다.</p>
      <p>공백을 입력하셨나요?</p>
      </>
    )
  }
  else if(movies.length === 0 && !isLoading){
    content = (
        <p>키워드로 조회된 결과가 없습니다</p>
    )
  }
  else if(movies.length > 0 && !isLoading){
    content = (
    <>
    <p className={classes.title}>검색결과</p>
        <div className={classes.contents_container}>
          {movies.map((movie) =>
            <div key={movie.id}>
              <MovieItem movie={movie} isLargeRow></MovieItem>
            </div>
          )}
        </div>
    </>
    )
  }
  
  return (
    <div className={classes.container}>
      <div className={classes.search_section}>
          <p className={classes.title}>검색어를 입력해주세요</p>
          <div className={classes.search}>
            <form onSubmit = {searchSubmit}>
              <input className = {!isValid && classes.input_error} onChange={searchInputChange} value={searchInput}></input>
              <button><FontAwesomeIcon icon={faSearch} size='1x' /></button>
            </form>  
          </div>
          {!isValid && <p className={classes.input_error_text}>키워드를 입력해주세요</p>}
          
      </div>
      <hr></hr>
      <div className={classes.contents_section}>
        {content}
      </div>
      
    </div>
  );
}

export default SearchScreen;

  