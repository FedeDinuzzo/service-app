import React from 'react';
import Testimonials from '../Testimonials';
import Hero from '../Hero';
import Repair from '../Repair';
import WorkForm from '../WorkForm';
import CTA from '../CTA';
import styles from '../../style';
import { heladeraHero, reparacionHeladeras, step2, tecnicoHeladeras } from '../../assets';
import { motion } from 'framer-motion';

function heladeras() {
  return (
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: {duration: 0.2} }}
    >
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
    </motion.div>
  )
}

export default heladeras