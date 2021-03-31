import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';

export default function Group() {
  return (
    <div className='cards'>
      <h1>Grupa badawcza</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/akicinska.jpg'
              text='Kierownik grupy badawczej, kicinska@agh.edu.pl'
              label='dr hab. inż. Alicja Kicińska prof. AGH'
              path='/ak'
            />
            <CardItem
              src='images/iwiewior.jpg'
              text='Członek grupy badawczej, iwona.wiewiorska@swns.pl'
              label='dr inż. Iwona Wiewiórska'
              path='/iw'
            />
            <CardItem
              src='images/logo_agh.jpg'
              text='Doktorant, Członek grupy badawczej, ewa.wysowska@swns.pl'
              label='mgr inż. Ewa Wysowska'
              path='/ew'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}