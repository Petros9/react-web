import React from 'react';
import './Group.css'

export default function IW() {
    return (
        <div className='key'>
            <h1>dr inż. Iwona Wiewiórska   </h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className="items">
                <li>Kierownik Zakładu Uzdatniania Wody w Starym Sączu Sądeckie Wodociągi Sp. z. o.o. ul. Wincentego Pola 22, 33-300 Nowy Sącz</li>
                <li>e-mail: iwona.wiewiorska@swns.pl</li>
            </ul>
        </div>
        </div>
            <h1>Główne zainteresowania badawcze</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className="items">
                    <li>Procesy uzdatniania wód powierzchniowych i podziemnych,</li>
                    <li>Ocena efektywności procesu koagulacji (objętościowej i kontaktowej), </li>
                    <li>Wdrażanie procedur ISO w zakresie nierutynowych pomiarów różnych form glinu w wodzie uzdatnianej,</li>
                    <li>Obliczenia bilansowe w przekrojach technologicznych.</li>
                </ul>
            </div>
        </div>
        </div>
      );
}