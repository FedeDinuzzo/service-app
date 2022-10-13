import React from 'react'
import styles from "../../style";
import { Heladeras, Features, Lavarropas, Zones, CTA, Stats, Hero } from ".."
import { heladeraLavarropas } from '../../assets';
import { motion } from 'framer-motion';

function home() {
  return (
    <div className='appear' >
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Hero 
          textOne="SERVICIO" 
          textTwo="TÉCNICO" 
          textThree="AUTORIZADO" 
          titleOne="Service" 
          titleTwo="Electrolux" 
          titleThree="Especializado" 
          img={heladeraLavarropas}
        />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Features />
          <Heladeras />
          <Lavarropas />
          <Zones />
          <CTA />
        </div>
      </div>
    </div>
  )
}

export default home
