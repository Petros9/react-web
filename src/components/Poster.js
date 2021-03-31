import React from 'react';
import '../App.css';
import './Poster.css';
import posterimage from '../resources/images/poster.png';

function Poster() {
    return (
        <div className='cards'>
            <h1>Poster</h1>
            <img width='100%' src={posterimage}/>
        </div>
      );
}

export default Poster;