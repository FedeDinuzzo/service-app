import styles from "../style";
import { arrowUp } from "../assets";
import { motion } from 'framer-motion';

const SolicitarTecnico = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1}}
    transition={{
      default: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01], delay: 0.5
      },
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001, delay: 0.5
      }
    }}
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full border-2 border-[#5ce1e6] p-[2px] cursor-pointer z-[1]`}>
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
  </motion.div>
);

export default SolicitarTecnico;
