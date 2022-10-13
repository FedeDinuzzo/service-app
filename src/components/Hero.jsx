import styles from "../style";
import { autorizado, robotHand, Vector } from "../assets";
import SolicitarTecnico from "./SolicitarTecnico";
import Ball from "./animations/ball";
import { motion } from 'framer-motion';

const Hero = ({ textOne, textTwo, textThree, titleOne, titleTwo, titleThree, img }) => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} lg:mt-[4px] xl:-mt-16`}>
    <div className={`flex-1 ${styles.flexStartHero} flex-col xl:px-0 sm:px-16 px-6`}>
      <motion.div 
        initial={{ y: "-14vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: {duration: 1.25, delay: 0.25} }}
        className="flex flex-row items-center -mt-9 sm:mt-0 lg:mt-[28px] xl:mt-0 py-[4px] xl:py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={autorizado} alt="autorizado" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} `}>
          <span className="text-white">{textOne} </span>
          {textTwo} {" "}
          <span className="text-white">{textThree}</span>
        </p>
      </motion.div>
      
      <div className="flex flex-row justify-between items-center w-full">
        <div className="absolute z-[0] w-[60%] h-[20%] -left-[50%] rounded-full bg-white blur-[250px]" />
        <motion.h1 
          initial={{ x: "-100vh" }}
          animate={{ x: 0, transition: {duration: 0.6, delay: 0.5} }}
          className="flex-1 font-poppins font-semibold text-[42px] md:text-[52px] xl:text-[68px] text-white leading-[46px] md:leading-[70px] xl:leading-[90px]">
          {titleOne} <br className="sm:block hidden"/> {" "}
          <span className="text-gradient">{titleTwo}</span> {" "}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: {duration: 0.75, delay: 0.5} }}
          className="ss:flex hidden md:mr-4 mr-0">
          <SolicitarTecnico />
        </motion.div>
      </div>

      <motion.h1
        initial={{ x: "-100vh" }}
        animate={{ x: 0, transition: {duration: 0.6, delay: 0.5} }}
        className="font-poppins font-semibold text-[42px] md:text-[52px] xl:text-[68px] text-white leading-[46px] md:leading-[70px] xl:leading-[90px] w-full">
        {titleThree}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: {duration: 1.5, delay: 0.5} }}
      >
        <p className={`${styles.paragraph} max-w-[470px] mt-2 sm:hidden`}>Service en CABA y BUENOS AIRES de Heladeras y Lavarropas Electrolux.</p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 hidden md:block`}>Service en CABA y BUENOS AIRES de Heladeras y Lavarropas Electrolux. Desliza e infórmate acerca de nuestra forma de trabajo.</p>
      </motion.div>
    </div>
    

    <div className="absolute z-[0] w-[40%] h-[70%] top-[0%] right-0 lg:-right-[15%] rounded-full blue__gradient opacity-80" />
    <div className="absolute z-[0] w-[40%] h-[40%] -top-[20%] right-0 rounded-full pink__gradient" />

    <div className={`flex-1 flex ${styles.flexCenter} my-0 md:my-10 mb-10 md:mb-0 relative`}>
      <div className="w-[6%] sm:w-[34%] md:w-[14%] xl:w-[0%]"/>
      <div className="w-[94%] sm:w-[70%] md:w-[86%] xl:w-[100%] h-[100%] relative z-[5] pb-[400px] sm:pb-[500px] md:pb-[640px]">
        
        <img src={Vector} alt="" className="absolute heroVector right-[12%]"/>
        <img src={img} alt="fondo" className="absolute heroImg"/>

        <div className="balls">
        <div className="absolute left-[15%] top-[54%] hidden xl:block">
          <Ball w={36} h={200} cx={20} cy={80} r={16} cyAnimate={40} duration={4} /> 
        </div>
        <div className="absolute left-[13%] top-[54%] block md:hidden">
          <Ball w={36} h={200} cx={20} cy={40} r={10} cyAnimate={20} duration={4} /> 
        </div>
        <div className="absolute left-[15%] top-[54%] hidden md:block lg:hidden">
          <Ball w={36} h={200} cx={20} cy={80} r={16} cyAnimate={40} duration={4} /> 
        </div>
        <div className="absolute left-[15%] top-[54%] hidden lg:block xl:hidden">
          <Ball w={60} h={200} cx={20} cy={80} r={16} cyAnimate={40} duration={4} /> 
        </div>


        <div className="absolute left-[58%] top-[50%] block md:hidden">
          <Ball w={66} h={132} cx={33} cy={40} r={16} cyAnimate={20} duration={4.25} /> 
        </div>
        <div className="absolute left-[64%] top-[50%] hidden md:block lg:hidden">
          <Ball w={66} h={132} cx={33} cy={80} r={33} cyAnimate={40} duration={4.25} /> 
        </div>
        <div className="absolute left-[64%] top-[50%] hidden lg:block xl:hidden">
          <Ball w={66} h={132} cx={33} cy={80} r={33} cyAnimate={40} duration={4.25} /> 
        </div>
        <div className="absolute left-[64%] top-[50%] hidden xl:block">
          <Ball w={66} h={132} cx={33} cy={80} r={33} cyAnimate={40} duration={4.25} /> 
        </div>

        <div className="absolute left-[1%] block md:hidden">
          <Ball w={100} h={200} cx={50} cy={60} r={26} cyAnimate={40} duration={4.25} /> 
        </div>
        <div className="absolute left-[6%] hidden md:block lg:hidden">
          <Ball w={100} h={200} cx={50} cy={80} r={50} cyAnimate={50} duration={4.25} /> 
        </div>
        <div className="absolute left-[6%] hidden lg:block xl:hidden">
          <Ball w={100} h={200} cx={50} cy={80} r={50} cyAnimate={50} duration={4.25} /> 
        </div>
        <div className="absolute left-[6%] hidden xl:block">
          <Ball w={100} h={200} cx={50} cy={80} r={50} cyAnimate={50} duration={4.25} /> 
        </div> 
        </div>

        <img src={robotHand} alt="fondo" className="absolute robotHand"/>

      </div>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <SolicitarTecnico />
    </div>
  </section>
);

export default Hero;
