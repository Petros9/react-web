import React from 'react';
import '../../../App.css';
import artic from '../../../resources/articles/Kicinska, Chemosphere_2019b.pdf'
export default function EnvB() {
  return  (
    <div> 
      <h1 className='sub_products'>
        <a href={artic}>Zobacz artykuł</a>
      </h1>

      <h1 className='sub_products'>
        <a href="https://bpp.agh.edu.pl/autor/kicinska-alicja-05039">Pozostałe publikacje I</a>
      </h1>
      
      <h1 className='sub_products'>
        <a href="https://bpp.agh.edu.pl/autor/wysowska-ewa-34508">Pozostałe publikacje II</a>
      </h1>
    </div>
    )
  }