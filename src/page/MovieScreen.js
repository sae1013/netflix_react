import React, { useEffect, useCallback, useState } from "react";
import requests from "../request";
import { useHistory, useParams } from "react-router-dom";
import useChainApi from "../hooks/useChainApi";
import Carousel from "../components/Carousel";
import { RatingView } from 'react-simple-star-rating'
import Nav from "../components/Nav";
import classes from "./MovieScreen.module.scss";
import axios from "axios";
import poster_null_image from '../images/poster_null.svg';
import people from '../images/people.svg';

const baseImageUrl = "https://image.tmdb.org/t/p/original";

function MovieScreen() {
  const history = useHistory();
  const params = useParams();
  const { isLoading, error, sendRequest: fetchData } = useChainApi();
  const [movie, setMovie] = useState(null);

  const genres = [];
  const actors = [];
  
  const applyData = useCallback((data) => {
    setMovie(data);
    console.log(data);
  }, []);

  useEffect(() => {
    fetchData({ url: requests.fetchDetailMovie(params.id)},applyData);
  }, [params.id]); 
  
  if (!movie) {
    return null;
  }
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${baseImageUrl}${movie.backdrop_path})` }}
    >
      <Nav />
      <div className={classes.contents_container}>
        <section className={classes.movie_container}>
          <div className={classes.movie_poster}>
          {movie.poster_path ?<img src={`${baseImageUrl}${movie.poster_path}`}></img>
            : <img style={{objectFit:'cover'}} src={poster_null_image}></img>}
          </div>
          <div className={classes.movie_info}>
            <div className={classes.movie_title}>
              <h1>{movie.title || movie.original_title}</h1>
              <p>{movie.tagline}</p>
            </div>
            <div className={classes.movie_playInfo}>
              <p>
                {movie.genres.map((genre, idx) =>
                  idx === movie.genres.length - 1 ? (
                    <span key={idx}>{genre.name}</span>
                  ) : (
                    <span key={idx}>
                      {genre.name}
                      <span className={classes.dot}>&#183;</span>
                    </span>
                  )
                )}
              </p>
              <p>
                {movie.release_date}
                <span className={classes.dot}>&#183;</span>
                <span>{movie.runtime}분</span>
              </p>
              <p>
                <RatingView ratingValue={movie.vote_average/2} stars={5}/>
              </p>
            </div>
            <div className={classes.movie_overview}>
              <p>{movie.overview}</p>
            </div>
            
            <div className={classes.actor}>
              {movie.credits.cast.slice(0, 5).map((actor) => {
                return (
                  <div key={actor.id} className={classes.actor_info}>
                    <div className={classes.image_wrapper}>
                      {actor.profile_path ? (<img src={`${baseImageUrl}${actor.profile_path}`}></img>) 
                      :<img src={people}></img>}
                      
                    </div>
                    <p className={classes.name}>{actor.name}</p>
                    <p className={classes.role}>{actor.character}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <hr style={{margin:'2.5rem 0'}}></hr>
        
        <section className={classes.video_section}>
            <p>트레일러 영상</p>
            <div className={classes.trailers}>
              {movie.videos.results.map((video)=>(
                <div className={classes.video_wrapper}key={video.key}>
                  <iframe width="400px" height="252px" src={`https://youtube.com/embed/${video.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope;" allowFullScreen></iframe>
                </div>
              ))}
            </div>
        </section>

        {movie.collections?.parts.length>1 &&(
          <>
          <hr style={{margin:'2.5rem 0'}}></hr>
          <section className={classes.series}> 
            <p className={classes.title}>이 컨텐츠의 모든 시리즈</p>
            <div className={classes.contents}>
                <Carousel items={movie.collections.parts}/>
            </div>
          </section>
          </>
        )}
        
        <hr style={{margin:'2.5rem 0'}}></hr>

        <section className={classes.recommendations}> 
          <p className={classes.title}>추천 컨텐츠</p>
          <div className={classes.contents}>
              <Carousel items={movie.recommendations.results}/>
          </div>
        </section>
        <footer className={classes.movie_screen_footer}></footer>
      </div>
    </div>

   
  );
}

export default MovieScreen;
