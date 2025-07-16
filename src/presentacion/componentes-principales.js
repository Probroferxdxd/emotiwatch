import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
//  Constantes

const nombre = "EmotiWatch";

//Seccion Botones

const SeccionBotones = () => {
  return (
    <div className="seccion-botones">
      <Link to="/emotiwatch/iniciar-sesion">
        <button className="btn iniciar-sesion">Iniciar Sesión</button>
      </Link>
      <Link to="/emotiwatch/registrarse">
        <button className="btn registrarse">Registrarse</button>
      </Link>
    </div>
  );
};

//Presentación del componente principal - Inicio

const Inicio = () => {
  return (
    <div className="inicio">
      <h1>Mantenga seguro a su niño</h1>
      <p style={{ textAlign: "justify" }}>
        {nombre} es un dispositivo portátil que permite a los padres monitorear
        la salud emocional de sus hijos. Con un diseño elegante y moderno, este
        dispositivo se adapta a cualquier estilo de vida.
      </p>
      <SeccionBotones />
    </div>
  );
};

// Componente de navegación principal

const Navbar = () => {
  const [menuActivo, setMenuActivo] = useState(false);

  const activarMenu = () => {
    setMenuActivo(!menuActivo);
  };

  const desactivarMenu = () => {
    setMenuActivo(false);
  };

  return (
    <nav className="navbar">
      <div className="bars">
        <a
          onClick={() => {
            activarMenu();
          }}
        >
          <i class="fa-solid fa-bars"></i>
        </a>
      </div>
      <ul className={`nav-links ${menuActivo ? "active" : ""}`}>
        <div
          classname="close"
          style={{
            position: "absolute",
            top: "5%",
            right: "10%",
            cursor: "pointer",
          }}
        >
          <span
            style={{ color: "#fff", fontWeight: "600" }}
            onClick={() => {
              desactivarMenu();
            }}
          >
            X
          </span>
        </div>
        <NavLink to="/" className="nav-link">
          <a
            onClick={() => {
              desactivarMenu();
            }}
          >
            Inicio
          </a>
        </NavLink>
        <NavLink to="/sobre-nosotros" className="nav-link">
          <a
            onClick={() => {
              desactivarMenu();
            }}
          >
            Sobre Nosotros
          </a>
        </NavLink>
        <NavLink to="/como-funciona" className="nav-link">
          <a
            onClick={() => {
              desactivarMenu();
            }}
          >
            Cómo Funciona
          </a>
        </NavLink>
      </ul>
    </nav>
  );
};

// Componente de logo

const Logo = () => {
  return (
    <div className="logo">
      <span>
        <i class="fa-solid fa-notes-medical"></i> <b>EMOTIWATCH</b>
      </span>
    </div>
  );
};

// Componente Iniciar Sesión y Registrarse

const IniciarSesion = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (
      usuario &&
      usuario.username === form.username &&
      usuario.password === form.password
    ) {
      window.location.href = "/panel"; // Redirige al panel
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="seccion-iniciar-sesion">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          onChange={handleChange}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={handleChange}
        />
        <Link to="/panel">
          <button type="submit" className="btn iniciar-sesion">
            Iniciar Sesión
          </button>
        </Link>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

const Registrarse = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guarda los datos en localStorage
    localStorage.setItem("usuario", JSON.stringify(form));
    window.location.href = "/panel"; // Redirige al panel
  };

  return (
    <div className="seccion-registrarse">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          onChange={handleChange}
        />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={handleChange}
        />
        <Link to="/panel">
          <button type="submit" className="btn registrarse">
            Registrarse
          </button>
        </Link>
      </form>
    </div>
  );
};

// Componente Sobre Nosotros

const SobreNosotros = () => {
  return (
    <div className="sobre-nosotros">
      <h1>Somos Fearless Crew</h1>
      <p>
        Somos un equipo comprometido con la seguridad y bienestar de los niños.
        Nuestro objetivo es proporcionar herramientas efectivas para que los
        padres puedan cuidar de sus hijos de manera más eficiente.
      </p>
    </div>
  );
};

// Componente Cómo Funciona

const ComoFunciona = () => {
  return (
    <div className="como-funciona">
      <h1>Cómo Funciona</h1>
      <p>
        {nombre} utiliza tecnología avanzada para monitorear las emociones de
        los niños. A través de sensores y algoritmos, el dispositivo puede
        detectar cambios en el estado emocional y enviar alertas a los padres.
      </p>
    </div>
  );
};

//Componente Panel

const Panel = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [estado, setEstado] = useState(0);
  const [activarModal, setActivarModal] = useState(false);
  const [arrayDeDispositivos, setArrayDeDispositivos] = useState([]);

  let numero;

  const cerrarModal = () => {
    setActivarModal(false);
  };

  const añadiendoDispositivo = (nombre) => {
    const nuevoDispositivo = {
      nombre: nombre,
      estado: estado,
    };
    setArrayDeDispositivos([...arrayDeDispositivos, nuevoDispositivo]);
    setActivarModal(false);
  };

  useEffect(() => {
    setTimeout(() => {
      numero = Math.floor(Math.random() * 100);
      setEstado(numero);
    }, 1000);
  }, [estado]);

  useEffect(() => {
  setArrayDeDispositivos((prev) =>
    prev.map((dispositivo) => ({
      ...dispositivo,
      estado: estado,
    }))
  );
}, [estado]);

  const abrirModal = () => {
    activarModal ? setActivarModal(false) : setActivarModal(true);
  };

  const condicional = (estadox) => {
    if (estadox < 40) { 
      return "Muy baja presión: " + estadox + " lpm"
    }
    else if (estadox > 40 && estadox < 60) {
      return "Baja presión: " + estadox + " lpm";
    } 
    else if(estadox >= 60 && estadox <= 100) {
      return "Normal: " + estadox + " lpm";
    }
    else if(estadox > 100) {
      return "Ansiedad: " + estadox + " lpm";
    }
    else{
      return "Estado crítico: " + estadox + " lpm";
    }
  }
  return (
    <div className="panel">
      {activarModal && (
        <ModalAñadirDispositivo
          modalActivo={cerrarModal}
          añadirDispositivo={añadiendoDispositivo}
        />
      )}
      <h1>Bienvenido {usuario ? usuario : "Usuario"}</h1>
      <button onClick={abrirModal}>Añadir Dispositivo</button>
      <div className="tabla-de-dispositivos">
        <h2>Dispositivos Registrados</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre del Dispositivo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {arrayDeDispositivos.map((dispositivo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{dispositivo.nombre}</td>
                <td>{condicional(dispositivo.estado)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Componente Añadir Dispositivo

const ModalAñadirDispositivo = ({ modalActivo, añadirDispositivo }) => {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() !== "") {
      añadirDispositivo(nombre);
      setNombre("");
    }
  };

  return (
    <div className="modal">
      <span className="close" onClick={modalActivo}>
        X
      </span>
      <h2>Añadir Dispositivo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del Dispositivo:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        <button type="submit">
          Añadir
        </button>
      </form>
    </div>
  );
};

// Exportamos los componentes para que puedan ser utilizados en otros archivos

export {
  Navbar,
  Logo,
  Inicio,
  SeccionBotones,
  SobreNosotros,
  ComoFunciona,
  IniciarSesion,
  Registrarse,
  Panel,
};
