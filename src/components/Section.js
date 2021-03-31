import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';
import imag from '../resources/images/IMG_7231.jpg'
function Section() {
  return (
    <div className='section-container'>
      <img className='section-img' src={imag}/>
      <h1>Zanieczyszczenia w środowisku - ryzyko ekologiczne i zdrowotne</h1>
      <p>Pollutions in the Enviroment - Ecological and Health Risk (PEEHR)</p>
      <div className='section-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          Zespół badawczy
        </Button>
      </div>
    </div>
  );
}

export default Section;