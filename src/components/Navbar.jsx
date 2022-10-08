import { useState } from "react";
import { close, logo , menu, wppLogo, navContacto, navHeladeras, navInicio, navLavarropas} from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import styles from "../style";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth} z-[10]`}>
    <nav className="w-full flex py-6 md:py-6 justify-between items-center navbar z-[]">
      <img src={logo} alt="service electrolux" className="w-[160px] h-[100%]"/>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">      
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="block fixed bottom-0 w-full z-50 sm:hidden">
        <div className="flex w-full h-[30px] bg-slate-700">
          <div className="flex justify-evenly items-center absolute bottom-0 left-6 border-b w-[50%] h-[60px] bg-slate-700 pt-[4px]">
            <Link to="/">
              <div className={`bg-[url('./assets/navInicio.svg')] text-center h-[30px] w-full bg-contain bg-center bg-no-repeat`} />
              <div className="font-poppins p-[4px] pb-[8px]">Inicio</div>
            </Link>
            <Link to="/heladeras">
              <div className={`bg-[url('./assets/navHeladeras.svg')] text-center h-[30px] w-full bg-contain bg-center bg-no-repeat`} />
              <div className="font-poppins p-[4px] pb-[8px]">Heladeras</div>
            </Link>
          </div>
          <img src={wppLogo} alt="" height="68px" width="68px" className="h-[72px] absolute bottom-[12px] left-0 right-0 m-auto z-[100]"/>
          <div className="flex justify-evenly items-center absolute bottom-0 right-0 border-b w-[50%] h-[60px] bg-slate-700 pt-[4px]">  
            <Link to="/lavarropas">
              <div className={`bg-[url('./assets/navLavarropas.svg')] text-center h-[30px] w-full bg-contain bg-center bg-no-repeat`} />
              <div className="font-poppins p-[4px] pb-[8px]">Lavarropas</div>
            </Link>
            <Link to="/contacto">
              <div className={`bg-[url('./assets/navContacto.svg')] text-center h-[30px] w-full bg-contain bg-center bg-no-repeat`} />
              <div className="font-poppins p-[4px] pb-[8px]">Contacto</div>
            </Link>
          </div>
        </div>
      </div>      
    </nav>
    </div>
    </div>
  );
};

export default Navbar;
