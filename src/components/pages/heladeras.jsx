import React from 'react';
import Testimonials from '../Testimonials';
import Hero from '../Hero';
import styles from '../../style';
import CTA from '../CTA';
import { heladeraHero } from '../../assets';

function heladeras() {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero 
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service" 
            titleTwo="De Heladeras" 
            titleThree="Elextrolux" 
            img={heladeraHero}
          />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonials/>
          <CTA />
        </div>
      </div>
    </>
  )
}

export default heladeras