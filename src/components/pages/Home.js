import React from 'react';
import '../../App.css';
import Section from '../Section';
import Cards from '../Cards';
import Poster from '../Poster';
import Key from '../Key';

function Home() {
  return (
    <>
      <Section/>
      <Key/>
      <Poster/>
      <Cards/>
    </>
  );
}

export default Home;