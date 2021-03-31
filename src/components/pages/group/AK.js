import React from 'react';
import './Group.css'
export default function AK() {
  return (
    <div className='key'>
        <h1>dr hab. inż. Alicja Kicińska, prof. AGH</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className="items">
                <li>Kierownik grupy badawczej</li>
                <li>ORCID: 0000-0003-2725-7319</li>
                <li>ResearcherID: J-8300-2016</li>
                <li>Scopus: 25629587900</li>
                <li>e-mail: kicinska@agh.edu.pl</li>
            </ul>
        </div>
        </div>
        <h1>Główne zainteresowania badawcze</h1>
    <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className="items">
                <li>Wykorzystane geowskaźników do oceny ryzyka środowiskowego,</li>
                <li>Ocena ryzyka ekologicznego oraz ryzyka zdrowotnego na obszarach poddanych silnej antropopresji,</li>
                <li>Geochemiczne przezmiany obszarów cennych przyrodniczo</li>
                <li>Analityka fizykochemiczna odpadów metalurgicznych.</li>
            </ul>
        </div>
    </div>
    </div>
  );
}