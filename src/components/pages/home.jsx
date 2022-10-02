import React from 'react'
import styles from "../../style";
import { Heladeras, Features, Lavarropas, Zones, CTA, Stats, Hero } from "../"


function home() {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
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
    </>
  )
}

export default home
