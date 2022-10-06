import { Footer, Navbar } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <Navbar/>
      <AnimatedRoutes/>
      <Footer/>
    </div>
  </Router>
);

export default App;
