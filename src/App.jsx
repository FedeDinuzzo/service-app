import { Footer, Navbar } from "./components";
import Home from "./components/pages/home";
import Heladeras from "./components/pages/heladeras";
import Lavarropas from "./components/pages/lavarropas";
import Contacto from "./components/pages/contacto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { robotHand, Vector, heladeraLavarropas } from './assets';
import { Fragment, useState, useEffect } from "react";
import Loader from "./components/Loader";
import styles from "./style";

const App = ({ img }) => { 
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    const imgs = [ robotHand, img, Vector, heladeraLavarropas ];
    
    cacheImages(imgs);
  }, []);
  
  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
  
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
  
    await Promise.all(promises);
  
    setIsLoading(false);
  };

  return(
    <div className="app">
    {isLoading 
    ? 
    <div className={`${styles.flexCenter} h-[90vh] bg-primary`}>
      <Loader />
    </div>
    :
    <Fragment>
      <main>
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/heladeras" element={<Heladeras />}/>
          <Route path="/lavarropas" element={<Lavarropas />}/>
          <Route path="/contacto" element={<Contacto />}/> 
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    </main>
    </Fragment>
    }
  </div>
  )
};

export default App;
