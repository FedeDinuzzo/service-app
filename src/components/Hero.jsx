import styles from "../style";
import { autorizado, robot } from "../assets";
import SolicitarTecnico from "./SolicitarTecnico";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={autorizado} alt="autorizado" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph}`}>
          <span className="text-white">SERVICIO </span>
          TÉCNICO {" "}
          <span className="text-white">AUTORIZADO</span>
        </p>
      </div>
      
      <div className="flex flex-row justify-between items-center w-full">
        <div className="absolute z-[0] w-[60%] h-[50%] -left-[40%] rounded-full bg-gradient-to-r from-white to-transparent blur-[250px]" />

        <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[48px] text-white ss:leading-[90px] leading-[70px]">
          Service <br className="sm:block hidden"/> {" "}
          <span className="text-gradient">Electrolux</span> {" "}
        </h1>
        <div className="ss:flex hidden md:mr4 mr-0">
          <SolicitarTecnico />
        </div>
          
      </div>

    <h1 className="font-poppins font-semibold ss:text-[68px] text-[48px] text-white ss:leading-[90px] leading-[70px] w-full">
        Especializado
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Service en CABA y BUENOS AIRES de Heladeras  y Lavarropas Electrolux.  Desliza e infórmate acerca de nuestra forma de trabajo y las reparaciones que realizamos</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="fondo" className="w-[100%] h-[100%] relative z-[5]" />
    
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[40%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <SolicitarTecnico />
    </div>
  </section>
);

export default Hero;
