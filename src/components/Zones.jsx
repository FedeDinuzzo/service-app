import { zones } from "../constants";
import styles from "../style";

const Zones = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} my-4 lg:my-12 xl:my-0`}>
    <div className={`${styles.flexCenter} flex-wrap md:w-full z-[10]`}>
      {zones.map((zone) => (
        <div key={zone.id} className={`flex-1 ${styles.flexCenter} min-w-[270px]`}>
          <img src={zone.logo} alt="zones" className="my-4"/>
        </div>
      ))};
    </div>
  </section>
);

export default Zones;
