import img1 from "../../assets/gallery/img1.jpg";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";

const gallery = () => {
  return (
    <div className="gallery">
      <h1>Galeria de imagenes</h1>
      <div className="grid_container">
        <div className="grid_item">
          <img src={img1} alt="" className="item-img"></img>
          <div className="item-text">
            <h3>Imagen 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              atque!
            </p>
          </div>
        </div>
        <div className="grid_item">
          <img src={img2} alt="" className="item-img"></img>
          <div className="item-text">
            <h3>Imagen 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              ullam?
            </p>
          </div>
        </div>
        <div className="grid_item">
          <img src={img3} alt="" className="item-img"></img>
          <div className="item-text">
            <h3>Imagen 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              atque!
            </p>
          </div>
        </div>
        <div className="grid_item">
          <img src={img4} alt="" className="item-img"></img>
          <div className="item-text">
            <h3>Imagen 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              velit?
            </p>
          </div>
        </div>
        <div className="grid_item">
          <img src={img5} alt="" className="item-img"></img>
          <div className="item-text">
            <h3>Imagen 5</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              atque!
            </p>
          </div>
        </div>
        <div className="grid_item">
          <img src={img6} alt="" className="item-img"></img>
          <div className="item-text">
            <h3>Imagen 6</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              atque!
            </p>
          </div>
        </div>
        <div className="grid_item">
          <img
            src="https://media.ambito.com/p/7324434aa6584847762c698b5e226864/adjuntos/239/imagenes/038/792/0038792147/dogecoin-memejpg.jpg"
            alt=""
            className="item-img"
          ></img>
          <div className="item-text">
            <h3>Imagen 7</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              velit?
            </p>
          </div>
        </div>
        <div className="grid_item">
          <img
            src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/980px/public/media/image/2021/07/one-piece-monkey-d-luffy-2407201.jpg?itok=gtoKHa4K"
            alt=""
            className="item-img"
          ></img>
          <div className="item-text">
            <h3>Imagen 8</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              atque!
            </p>
          </div>
        </div>
        <div className="grid_item">
          <img
            src="https://i2.wp.com/criptotendencia.com/wp-content/uploads/2021/05/Elon-Musk-empieza-a-trabajar-con-desarrolladores-de-Dogecoin.jpg?resize=890%2C450&ssl=1"
            alt=""
            className="item-img"
          ></img>
          <div className="item-text">
            <h3>Imagen 9</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              atque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default gallery;
