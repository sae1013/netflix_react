import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../request";
import classes from './HomeScreen.module.css';
import {useHistory} from 'react-router-dom';

function Homescreen(props) {
  
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <div className={classes.row_container}>
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetFlixOriginals}
          isLargeRow
          isTvShow
        ></Row>
        <Row fetchUrl={requests.fetchTrending} title="Trending"></Row>
        <Row fetchUrl={requests.fetchTopRate} title="Top Rated"></Row>
        <Row fetchUrl={requests.fetchPopulateMovie} title="Most Populated"></Row>
        <Row fetchUrl={requests.fetchActionMovies} title="Action Movies"></Row>
        <Row fetchUrl={requests.fetchComedyMovies} title="Comedy Movies"></Row>
        <Row fetchUrl={requests.fetchRomanceMovies} title="Romance Movies"></Row>
        <Row fetchUrl={requests.fetchDocumentaries} title="Documentaries"></Row>
      </div>
    </div>
  );
}

export default Homescreen;
