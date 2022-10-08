import { Link } from "react-router-dom";
const header = () => {
  return (
    <div className="div_menu">
      <nav className="menu">
        <label className="logo"><Link className="logo" to="/">MY FIRST LANDING PAGE - KEVIN ALEXANDER CHECA DIAZ</Link></label>
        <ul className="items">
          <li>
            <Link className="link" to="/">Inicio</Link>
          </li>
          <li>
            <Link className="link" to="introduction">Equipo</Link>
          </li>
          <li>
            <Link className="link" to="projects">Proyectos</Link>
          </li>
          <li>
            <Link className="link" to="contact">Contacto</Link>
          </li>
          <li>
            <Link className="link" to="retos">Retos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default header;
