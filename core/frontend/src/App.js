// React modules
import React from "react";
import "./App.css";

// Bootstrap modules
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// Primary components
import Navbar from "./components/ui/Navbar/Navbar";
import Home from "./components/views/Home/Home";
// import Prueba from "./components/Prueba/Prueba";
// import Footer from "./components/Footer/Footer";

// Secondary components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Colabora from "./components/Pages/Colabora";
// import CampoEscuela from "./components/Pages/CampoEscuela";
// import Reserva from "./components/Pages/Reserva";
// import Campamentos from "./components/Pages/Campamentos";
// import Conocenos from "./components/Pages/Conocenos";
// import TalleresProyectos from "./components/Pages/TalleresProyectos";
// import NotFound from "./components/Pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <Switch>
          {/* <Route path="/talleres-y-proyectos" component={TalleresProyectos} />
          <Route path="/conocenos" component={Conocenos} />
          <Route path="/campamentos" component={Campamentos} />
          <Route path="/reserva" component={Reserva} />
          <Route path="/campo-escuela" component={CampoEscuela} />
          <Route path="/colabora" component={Colabora} />
          <Route path="/prueba" component={Prueba} />
          <Route path="/" component={Home} exact />
          <Route path="*" component={NotFound} /> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
