import React from 'react';
import style from './About.module.css';

function About() {
  return (
    <div className={style.aboutContainer}>
      <h2>Nosotros</h2>
      <p>
        SmarTech es la solución perfecta para comprar un smartphone usado con garantía. Todos los celulares son revisados por nuestros técnicos, funcionan como nuevos y tienen garantía de 90 días.
        También podrás encontrar celulares nuevos con 1 año de garantía. Todos los celulares que vendemos son originales.
      </p>
      <h4>Visión:</h4>
      <p>Ser líderes en el mercado secundario de Smartphones contribuyendo y fomentando la reutilización de tecnología en Latino América.</p>
      <h4>Misión:</h4>
      <p>Proporcionar a nuestros usuarios un canal rápido y seguro al momento de querer comprar un smartphone usado.</p>
    </div>
  );
}

export default About;