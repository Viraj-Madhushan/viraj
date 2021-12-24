import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="f">
      <div className="f-left">
        <div className="f-copy">&copy;2021 | Viraj Madhushan</div>
      </div>
      <div className="f-right">
        <div className="f-social">
          <a
            href="https://www.facebook.com/VirajMadhushanD/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="f-icon" />
          </a>

          <a
            href="https://www.instagram.com/virajmadhushan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="f-icon" />
          </a>

          <a
            href="https://twitter.com/VirajMadhushan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="f-icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/virajmadhushanD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="f-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
