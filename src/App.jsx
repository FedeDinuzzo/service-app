import { Footer, Navbar } from "./components";
import Home from "./components/pages/home";
import Heladeras from "./components/pages/heladeras";
import Lavarropas from "./components/pages/lavarropas";
import Contacto from "./components/pages/contacto";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
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
);

export default App;
