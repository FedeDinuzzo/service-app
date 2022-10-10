import Home from "./pages/home";
import Heladeras from "./pages/heladeras";
import Lavarropas from "./pages/lavarropas";
import Contacto from "./pages/contacto";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/> 
        <Route path="/heladeras" element={<Heladeras />}/>
        <Route path="/lavarropas" element={<Lavarropas />}/>
        <Route path="/contacto" element={<Contacto />}/> 
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes