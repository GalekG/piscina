import pokeball from "../assets/pokeball.png";
import { Link } from "react-router-dom";

const projects = () => {
  return (
    <div className="grid_container">
      <Link className="grid_link" to="/projects/pokeapi">
        <div className="grid_item">
          <img src={pokeball} alt="" className="item-img"></img>
          <div className="item-text">
            <h3>Pokeball Api</h3>
            <p>Trabajamos con una api de pokemon!</p>
          </div>
        </div>
      </Link>
      <Link className="grid_link" to="/projects/gallery">
        <div className="grid_item">
          <img src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/04/luffy-imagen-autor-slam-dunk.jpg?fit=1280%2C720&quality=80&ssl=1" alt="" className="item-img"></img>
          <div className="item-text">
            <h3>Imagenes</h3>
            <p>Una galeria de imagenes!</p>
          </div>
        </div>
      </Link><Link className="grid_link" to="/">
        <div className="grid_item">
          <img src={pokeball} alt="" className="item-img"></img>
          <div className="item-text">
            <h3>My landing page c:</h3>
            <p>La verdad quería mostrar una aplicacion de unas burbujas, pero no supe como adaptarlo c:</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default projects;
