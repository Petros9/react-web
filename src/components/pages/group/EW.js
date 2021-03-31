import React from 'react';
import './Group.css'

export default function EW() {
    return (
        <div className='key'>

        <h1>mgr inż. Ewa Wysowska</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className="items">
                <li>Doktorant</li>
                <li>e-mail: ewa.wysowska@swns.pl</li>
            </ul>
        </div>
        </div>

            <h1>Główne zainteresowania badawcze</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className="items">
                    <li>Ocena ryzyka (analiza ryzyka i ewaluacja ryzyka), </li>
                    <li>Analiza prawdopodobieństwa pojawienia się czynnika niebezpiecznego i ocena dotkliwości następstw wynikających z zagrożeń (matryce ryzyka),</li>
                    <li>Wizualizacja wyników oceny ryzyka zdrowotnego,</li>
                    <li>Określenie związku ryzyka ze zmieniającym się stanem środowiska i zagospodarowaniem terenu.</li>
                </ul>
            </div>
        </div>
        </div>
      );
}