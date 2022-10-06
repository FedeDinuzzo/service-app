import styles from "../style";
import { arrowUp } from "../assets";

const SolicitarTecnico = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full border-2 border-[#5ce1e6] p-[2px] cursor-pointer z-[10]`}>
    <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
          <span className="text-gradient">Solicitar</span>
        </p>
        <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">un Técnico</span>
      </p>
    </div>
  </div>
);

export default SolicitarTecnico;
