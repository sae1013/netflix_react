import React from 'react'
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../request';

function Homescreen() {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      {/* <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetFlixOriginals}></Row> */}
      {/* <Row></Row>
      <Row></Row>
      <Row></Row> */}
    </div>
  )
}

export default Homescreen
