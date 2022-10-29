import facebook from "../assets/redes/facebook.png";
import instagram from "../assets/redes/instagram.png";
import whatsapp from "../assets/redes/whatsapp.png";
import Lateral from "../components/Lateral";

const Contact = () => {
  return (
    <div>
      <div className="div_contact">
        <h1 className="contacto">CONTACTENOS</h1>
        <nav className="nav_contacto">
          <ul className="contact_items">
            <li className="facebook">
              <a href="https://web.facebook.com/">Facebook</a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
            <li className="whatsapp">
              <a href="https://web.whatsapp.com/">Whatsapp</a>
            </li>
            <br></br>
            <li>
              <a href="https://web.facebook.com/">
                <img className="redesImg" src={facebook} alt="redes"></img>
              </a>
              <a href="https://www.instagram.com/">
                <img className="redesImg" src={instagram} alt="redes"></img>
              </a>
              <a href="https://web.whatsapp.com/">
                <img className="redesImg" src={whatsapp} alt="redes"></img>
              </a>
              <br></br>
            </li>
          </ul>
        </nav>
      </div>
      <Lateral />
    </div>
  );
};
export default Contact;
