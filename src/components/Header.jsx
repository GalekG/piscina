import { Link } from "react-router-dom";
const header = () => {
  return (
    <div className="div_menu">
      <nav className="menu">
        <ul className="items">
          <li>
            <Link className="link" to="/">Inicio</Link>
          </li>
          <li>
            <Link className="link" to="location">Ubicacion</Link>
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
          <hr/>
        </ul>
        
      </nav>
    </div>
  );
};
export default header;
