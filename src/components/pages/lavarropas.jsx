import React from 'react';
import Testimonials from '../Testimonials';
import Hero from '../Hero';
import Repair from '../Repair';
import WorkForm from '../WorkForm';
import styles from '../../style';
import CTA from '../CTA';
import { lavarropasHero, reparacionLavarropas, step2v, tecnicoLavarropas } from '../../assets';

function lavarropas() {
  return (
    <div className='appear'>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero 
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service De" 
            titleTwo="Lavarropas" 
            titleThree="Electrolux" 
            img={lavarropasHero}
          />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <WorkForm repair={reparacionLavarropas} technical={tecnicoLavarropas} />
          <Repair gadget="lavarropas" step={step2v}/>
          <Testimonials/>
          <CTA />
        </div>
      </div>
    </div>
  )
}

export default lavarropas