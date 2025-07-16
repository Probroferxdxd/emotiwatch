import logo from "./logo.svg";
import { Route, Routes, NavLink } from "react-router-dom";
import {
  Inicio,
  Navbar,
  Logo,
  SobreNosotros,
  ComoFunciona,
  IniciarSesion,
  Registrarse,
  Panel
} from "./presentacion/componentes-principales";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <Logo />
        <Navbar />
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
