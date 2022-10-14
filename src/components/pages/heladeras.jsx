import React from 'react';
import Testimonials from '../Testimonials';
import Hero from '../Hero';
import Repair from '../Repair';
import WorkForm from '../WorkForm';
import CTA from '../CTA';
import styles from '../../style';
import { heladeraHero, reparacionHeladeras, step2, tecnicoHeladeras } from '../../assets';

function heladeras() {
  return (
    <div className='appear'>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero 
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service" 
            titleTwo="De Heladeras" 
            titleThree="Electrolux" 
            img={heladeraHero}
          />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <WorkForm repair={reparacionHeladeras} technical={tecnicoHeladeras} />
          <Repair gadget="heladera" step={step2}/>
          <Testimonials/>
          <CTA />
        </div>
      </div>
    </div>
  )
}

export default heladeras