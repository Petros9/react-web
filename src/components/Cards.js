import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import i7222 from '../resources/images/IMG_7222.jpg';
import p9112 from '../resources/images/P8120287.JPG';
import i7237 from '../resources/images/IMG_7237.jpg';
function Cards() {
  return (
    <div className='cards'>
      <h1>Wybrane publikacje</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={i7222}
              text='Metals and mineral phases of dusts collected in different
              urban parks of Krakow and their impact on the health
              of city residents'
              label='Alicja Kicińska, Piotr Bożęcki'
              path='/metals'
            />
            <CardItem
              src={p9112}
              text='Environmental risk related to presence and mobility of As, Cd and Tl in
              soils in the vicinity of a metallurgical plant e Long-term observations'
              label='Alicja Kicińska'
              path='/enva'
            />
            <CardItem
              src={i7237}
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