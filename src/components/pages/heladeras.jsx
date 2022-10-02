import React from 'react';
import Testimonials from '../Testimonials';
import Hero from '../Hero';
import styles from '../../style';

function heladeras() {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonials/>
        </div>
      </div>
    </>
  )
}

export default heladeras