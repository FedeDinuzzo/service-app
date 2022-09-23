import { lavarropas } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Lavarropas = () => (
  <section id="product" className={layout.section}>
    

    <div className="lg:pr-8">
      <h2 className={styles.heading2}>Reparación de <br className="sm:block hidden" />Lavarropas Electrolux</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Servicio técnico especializado en Lavarropas de Carga frontal y Carga superior Electrolux. Repuestos originales</p>
      <Button styles="mt-10" />
    </div>
    
    <div className={layout.sectionImgReverse}>
      <img src={lavarropas} alt="lavarropas" className="lg:ml-36"/>
    
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
    </div>
    
  </section>
);

export default Lavarropas;