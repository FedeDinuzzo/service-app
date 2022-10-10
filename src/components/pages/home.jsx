import React from 'react'
import styles from "../../style";
import { Heladeras, Features, Lavarropas, Zones, CTA, Stats, Hero } from ".."
import { heladeraLavarropas } from '../../assets';
import { motion } from 'framer-motion';

function home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {duration: 0.75} }}
    >
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
    </motion.div>
  )
}

export default home
