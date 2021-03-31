import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import akicinska from '../../resources/images/akicinska.jpg'
import iwiewior from '../../resources/images/iwiewior.jpg'
import logo_agh from '../../resources/images/logo_agh.jpg'

export default function Group() {
  return (
    <div className='cards'>
      <h1>Grupa badawcza</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={akicinska}
              text='Kierownik grupy badawczej, kicinska@agh.edu.pl'
              label='dr hab. inż. Alicja Kicińska prof. AGH'
              path='/ak'
            />
            <CardItem
              src={iwiewior}
              text='Członek grupy badawczej, iwona.wiewiorska@swns.pl'
              label='dr inż. Iwona Wiewiórska'
              path='/iw'
            />
            <CardItem
              src={logo_agh}
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