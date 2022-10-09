import { logo, wppLogo } from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import styles from "../style";

const Navbar = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth} z-[10]`}>
    <nav className="w-full flex py-6 md:py-6 justify-between items-center navbar">
      <img src={logo} alt="service electrolux" className="w-[160px] h-[100%] -mt-2 md:mt-0"/>
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

      <div className="block fixed bottom-0 left-0 w-[100vw] sm:hidden">
        <div className="flex w-full h-[30px] bg-primary">
          <div className="flex justify-evenly items-center absolute bottom-0 w-[46%] h-[42px] bg-primary rounded-tr-[36px] rounded-tl-[20px] pl-4">
          {navLinks.map((nav, index) => (
            <Link to={`/${nav.id}`}>
              <div key={nav.id} className={`${index >= 2 ? 'mr-0' : 'mr-12'} bg-[url('./assets/nav${nav.title}.svg')] text-center h-[28px] w-full bg-contain bg-center bg-no-repeat`} ></div>
            </Link>
          ))}
          </div>
          <img src={wppLogo} alt="" height="58px" width="58px" className="absolute bottom-[2px] left-0 right-0 m-auto z-[100]"/>
          <div className="flex justify-evenly items-center absolute bottom-0 right-0 w-[46%] h-[42px] bg-primary rounded-tl-[36px] rounded-tr-[20px] pr-4">  
          {navLinks.map((nav, index) => (
            <Link to={`/${nav.id}`}>
              <div key={nav.id} className={`${index <= 1 ? 'mr-0' : 'mr-12'} bg-[url('./assets/nav${nav.title}.svg')] text-center h-[28px] w-full bg-contain bg-center bg-no-repeat`} ></div>
            </Link>
          ))}
          </div>
        </div>
      </div>      
    </nav>
    </div>
    </div>
  );
};

export default Navbar;
