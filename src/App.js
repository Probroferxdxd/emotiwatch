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
          <Route path="/emotiwatch/" element={<Inicio />} />
          <Route path="/emotiwatch/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/emotiwatch/como-funciona" element={<ComoFunciona />} />
          <Route path="/emotiwatch/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/emotiwatch/registrarse" element={<Registrarse />} />
          <Route path="/emotiwatch/panel" element={<Panel />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
