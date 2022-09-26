import { zones } from "../constants";
import styles from "../style";

const Zones = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {zones.map((zone) => (
        <div key={zone.id} className={`sm:flex-1 ${styles.flexCenter} min-w-[270px]`}>
          <img src={zone.logo} alt="zones" className="my-4"/>
        </div>
      ))};
    </div>
  </section>
);

export default Zones;
