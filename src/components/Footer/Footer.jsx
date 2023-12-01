import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/belixlogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="horario">
          <h3>Horario</h3>
          <p>
            Lunes a Viernes 5:00 AM - 9:00 PM <br /> Sábado 6:00 AM - 4:00 PM
          </p>
        </div>
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="sociales">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
      <strong>Belix Total Fitness &copy; 2023</strong>
    </footer>
  );
};

export default Footer;

