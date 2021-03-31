import React from 'react';
import '../App.css';
import './Key.css';

function Key() {
    return (
        <div className='key'>
            <h1>Kluczowe zainteresowania grupy badawczej</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className="items">
                    <li>Analityka ilościowa i jakościowa zanieczyszczeń organicznych i nieorganicznych w wodach, glebach, roślinach i innych komponentach środowiska,</li>
                    <li>Ocena ryzyka zdrowotnego dzieci i osób dorosłych związana z narażeniem na obecność ksenobiotyków organicznych i nieorganicznych w środowisku,</li>
                    <li>Oporność i tempo migracji zanieczyszczeń (metali ciężkich, farmaceutyków, WWA i innych) w naturalnych procesach erozji oraz wywołanych antropopresją i ich wpływ na wielkość narażenia i biodostępność ksenobiotyków,</li>
                    <li>Przemiany form (frakcji) metali ciężkich z trudno rozpuszczalnych w kierunku form labilnych,</li>
                    <li>Badanie zależności pomiędzy wybranymi procesami technologicznymi oczyszczania wód a wielkością narażenia zdrowotnego.</li>
                </ul>
            </div>
        </div>
        </div>
      );
}

export default Key;