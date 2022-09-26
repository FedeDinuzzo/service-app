import { lavarropas } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Lavarropas = () => (
  <section id="product" className={`${layout.section} -mb-40 -mt-20`}>
    <div className="absolute z-[0] w-[60%] h-[80%] -right-[50%] rounded-full blue__gradient" />
    <div className="absolute z-[0] w-[70%] h-[90%] -right-[50%] rounded-full blue__gradient" />

    <div className="lg:pr-8">
      <h2 className={styles.heading2}>Reparación de <br className="sm:block hidden" />Lavarropas Electrolux</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Servicio técnico especializado en Lavarropas de Carga frontal y Carga superior Electrolux. Repuestos originales</p>
      <Button styles="mt-10" />
    </div>
    
    <div className={layout.sectionImgReverse}>
      <img src={lavarropas} alt="lavarropas" className="lg:ml-36"/>
    </div>
    
  </section>
);

export default Lavarropas;