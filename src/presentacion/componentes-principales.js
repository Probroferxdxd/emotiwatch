import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import imagen1Src from "../imagenes/registrarse.png"; // Importa la imagen de registrarse
import imagenes2Src from "../imagenes/añadir-dispositivo.png"; // Importa la imagen de cómo funciona
import logo from "../imagenes/logo.png"; // Importa el logo
//  Constantes

const nombre = "EmotiBand";

//Seccion Botones

const SeccionBotones = () => {
  return (
    <div className="seccion-botones">
      <Link to="/iniciar-sesion">
        <button className="btn iniciar-sesion">Iniciar Sesión</button>
      </Link>
      <Link to="/registrarse">
        <button className="btn registrarse">Registrarse</button>
      </Link>
    </div>
  );
};

//Presentación del componente principal - Inicio

const Inicio = () => {
  return (
    <div className="inicio">
      <h1>Mantenga seguro a su menor</h1>
      <p style={{ textAlign: "justify" }}>
        {nombre} es un dispositivo en forma de banda elástica que permite a los
        padres monitorear la salud emocional de sus hijos gracias a los datos
        médicos por los sensores. Con un diseño ecoamigable y económico, este
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

        <img src={logo} style={{objectFit: "cover"}}/> <b>EMOTIWATCH</b>

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
        Somos un equipo comprometido con la seguridad y bienestar de los
        adolescentes. Nuestro objetivo es proporcionar herramientas efectivas
        para que los padres puedan cuidar de sus hijos de manera más eficiente.
      </p>
    </div>
  );
};

// Componente Cómo Funciona

const ComoFunciona = () => {
  return (
    <div className="como-funciona">
      <h2 className="titulo-principal">Guía de Uso del Dispositivo</h2>

      <div className="paso-inicial">
        <h1>¿Cómo Funciona?</h1>
        <div className="descripcion-general">
          <p>
            {nombre} permite al tutor monitorear la salud emocional de sus hijos
            a través de sensores que miden la frecuencia cardíaca y otros
            indicadores de estrés. Los datos se envían a una aplicación móvil
            donde el tutor puede ver el estado emocional del menor en tiempo
            real. Para poder utilizar correctamente el dispositivo, el tutor
            debe seguir los siguientes pasos.
          </p>
        </div>
      </div>

      <div className="paso">
        <h3>Paso 1: Colocar el dispositivo</h3>
        <p>
          Colocar el dispositivo en la muñeca del menor, asegurándose de que
          esté ajustado pero cómodo. Luego, encender el dispositivo y asegurarse
          de que esté detectando dispositivos.
        </p>
        <div className="contenedor-imagen">
          {/* <img src="ruta/paso1.jpg" alt="Colocar el dispositivo" /> */}
        </div>
      </div>

      <div className="paso">
        <h3>Paso 2: Crear cuenta e iniciar sesión</h3>
        <p>
          Abrir la aplicación móvil y crear una cuenta si aún no lo ha hecho.
          Iniciar sesión con las credenciales proporcionadas durante el
          registro.
        </p>
        <div className="contenedor-imagen">
          <img src={imagen1Src} alt="Crear cuenta e iniciar sesión" />
        </div>
      </div>

      <div className="paso">
        <h3>Paso 3: Vincular el dispositivo</h3>
        <p>
          Seleccionar la opción para agregar un nuevo dispositivo y seguir las
          instrucciones en pantalla para vincular el dispositivo con la
          aplicación. Luego se presentará una interfaz donde se podrá ver el
          estado emocional del menor en tiempo real.
        </p>
        <div className="contenedor-imagen">
         <img src={imagenes2Src} alt="Vincular el dispositivo" />
        </div>
      </div>
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
      return "Muy baja presión: " + estadox + " lpm";
    } else if (estadox > 40 && estadox < 60) {
      return "Baja presión: " + estadox + " lpm";
    } else if (estadox >= 60 && estadox <= 100) {
      return "Normal: " + estadox + " lpm";
    } else if (estadox > 100) {
      return "Ansiedad: " + estadox + " lpm";
    } else {
      return "Estado crítico: " + estadox + " lpm";
    }
  };
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
        <button type="submit">Añadir</button>
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
