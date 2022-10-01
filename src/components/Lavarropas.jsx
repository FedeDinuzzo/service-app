import { lavarropas } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Lavarropas = () => (
  <section id="product" className={`${layout.section} -mb-40 -mt-16 md:mt-0 xl:-my-20 xl:-mb-40`}>
    <div className="absolute z-[0] w-[24%] h-[80%] -right-[0%] rounded-l-full blue__gradient" />
    <div className="absolute z-[0] w-[24%] h-[80%] -right-[0%] rounded-l-full blue__gradient" />

    <div className="lg:pr-8">
      <h2 className={styles.heading2}>Reparación de <br className="sm:block hidden" />Lavarropas Electrolux</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3 xl:mt-5`}>Servicio técnico especializado en Lavarropas de Carga frontal y Carga superior Electrolux. Repuestos originales</p>
      <Button styles="mt-6 xl:mt-10" />
    </div>
    
    <div className={layout.sectionImgReverse}>
      <img src={lavarropas} alt="lavarropas" className="w-[280px] xl:w-auto lg:ml-36"/>
    </div>
    
  </section>
);

export default Lavarropas;