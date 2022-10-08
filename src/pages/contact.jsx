import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const contact = () => {
  return (
    <div className="contacto">
      <h1 className="contacto">CONTACTO</h1>
      <nav className="contacto">
        <ul className="contactItems">
          <li className="facebook">
            <a href="https://web.facebook.com/">Facebook</a>
          </li>
          <li className="instagram">
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
          <li className="linkedin">
            <a href="https://co.linkedin.com/">Linkedin</a>
          </li>
          <li><br></br></li>
          <li>
            <a href="https://web.facebook.com/"><img className="redesImg" src={facebook} alt="redes"></img></a>
            <a href="https://www.instagram.com/"><img className="redesImg" src={instagram} alt="redes"></img></a>
            <a href="https://co.linkedin.com/"><img className="redesImg" src={linkedin} alt="redes"></img></a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default contact;
