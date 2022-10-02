import React from 'react';
import styles from "../../style";
import { Hero } from "../"
import { phone } from '../../assets';

function contacto() {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Hero 
          textOne="ATENDEMOS"
          textTwo="URGENCIAS"
          textThree="POR"
          textFour="WHATSAPP"
          titleOne="Contactanos" 
          titleTwo="Y Resolvemos" 
          titleThree="Tu problema" 
          img={phone}
        />
        </div>
      </div>
    </>
  )
}

export default contacto