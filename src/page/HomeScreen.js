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
        <Row fetchUrl={requests.fetchUpComing} title="UpComing" isLargeRow></Row>
        <Row fetchUrl={requests.fetchPopulateMovie} title="Most Populated"></Row>
        <Row fetchUrl={requests.fetchTvMovies} title="Tv Movies"></Row>
        <Row fetchUrl={requests.fetchThrillerMovies} title="Thriller Movies"></Row>
        <Row fetchUrl={requests.fetchRomanceMovies} title="Romance Movies"></Row>
        <Row fetchUrl={requests.fetchDocumentaries} title="Documentaries"></Row>
      </div>
    </div>
  );
}

export default Homescreen;
