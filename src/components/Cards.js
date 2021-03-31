import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Wybrane publikacje</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/IMG_7222.jpg'
              text='Metals and mineral phases of dusts collected in different
              urban parks of Krakow and their impact on the health
              of city residents'
              label='Alicja Kicińska, Piotr Bożęcki'
              path='/metals'
            />
            <CardItem
              src='images/P8120287.jpg'
              text='Environmental risk related to presence and mobility of As, Cd and Tl in
              soils in the vicinity of a metallurgical plant e Long-term observations'
              label='Alicja Kicińska'
              path='/enva'
            />
            <CardItem
              src='images/IMG_7237.jpg'
              text='Chemical and mineral composition of fly ashes from home furnaces,
              and health and environmental risk related to their presence in the
              environment'
              label='Alicja Kicińska'
              path='/envb'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;