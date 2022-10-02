import { heladera, atencion } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Heladeras = () => (
  <section id="product" className={`${layout.sectionReverse} mt-6 md:mt-20 xl:mt-0`}>
    <div className={layout.sectionImgReverse}>
      <img src={heladera} alt="heladera" className="w-[280px] md:w-[320px] xl:w-auto lg:mr-36"/>
      <img src={atencion} alt="" className="absolute pt-52 pl-28 md:pl-32 lg:pl-48 md:w-[86%] xl:w-auto" />
      
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
    </div>

    <div className="lg:pr-8">
      <h2 className={styles.heading2}>Reparación de <br className="sm:block hidden" />Heladeras Electrolux</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3 xl:mt-5`}>Servicio Técnico Especializado en Heladeras Familiares, Tropicales, No Frost y Freezers. Repuestos originales</p>
      <Button styles="mt-6 xl:mt-10" text="Mas Información"/>
    </div>

    
  </section>
);

export default Heladeras;
