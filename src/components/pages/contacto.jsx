import React from 'react';
import styles, { layout } from "../../style";
import { Hero } from ".."
import { phone, callButton, ellipse2, callUs} from '../../assets';

function contacto() {
  return (
    <div className='appear'>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Hero 
          textOne="URGENCIAS"
          textTwo="POR"
          textThree="WHATSAPP"
          titleOne="Contactanos" 
          titleTwo="Y Resolvemos" 
          titleThree="Tu problema" 
          img={phone}
        />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} pb-[320px] sm:pb-[480px] lg:pb-0 xl:pb-[160px]`}>
        <div className={`${styles.boxWidth} flex flex-col items-center`}>
          <section id="product" className={`${layout.sectionReverse} -mt-20 md:-mt-20 lg:-mt-8 w-full`}>
            <div className="z-[10] w-[50%]">
              <img src={ellipse2} alt="" className='absolute max-w-[350px] sm:max-w-full'/>
              <img src={callUs} alt="" className='absolute max-w-[350px] sm:max-w-full'/>
            </div>

          <div className={layout.sectionImgReverse}>
              <div className='sm:w-[100%] my-12 md:mb-[300px] xl:mb-0 z-[10]'>
                <a href="tel:1143838283">
                  <div className={`flex flex-row p-6 lg:ml-12 w-[340px] sm:w-auto max-w-[470px] rounded-[20px] feature-card-set`}>
                    <div className={`w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}> 
                      <img src={callButton} alt="icon" className="" />
                    </div>
                    <div className="flex-1 flex flex-col ml-2 md:ml-6 pt-2 align-center">
                      <h2 className="font-poppins font-semibold text-white text-[28px] lg:text-[36px] leading-[23px] mb-1">011 4383-8283</h2>
                      <p className="font-poppins font-norma; text-dimWhite text-[15px] xl:text-[16px] leading-[23px] mb-1">Haz click para llamar</p>
                    </div>
                  </div>
                </a>

                <a href="tel:1143828369">
                  <div className={`flex flex-row p-6 lg:ml-12 mt-4 max-w-[470px] rounded-[20px] feature-card-set`}>
                    <div className={`w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}> 
                      <img src={callButton} alt="icon" className="" />
                    </div>
                    <div className="flex-1 flex flex-col ml-2 md:ml-6 pt-2 align-center">
                      <h2 className="font-poppins font-semibold text-white text-[28px] lg:text-[36px] leading-[23px] mb-1">011 4382-8369</h2>
                      <p className="font-poppins font-norma; text-dimWhite text-[15px] xl:text-[16px] leading-[23px] mb-1">Haz click para llamar</p>
                    </div>
                  </div>
                </a>
              </div>
            </div> 

            <div className="absolute z-[0] w-[66%] h-[77%] -left-[50%] rounded-full blue__gradient" />
          </section>
        </div>
      </div>
    </div>
  )
}

export default contacto