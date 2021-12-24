import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faAddressBook,
  faInfoCircle,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="h">
      <div className="h-menu">
        <Link to="/viraj">
          <FontAwesomeIcon icon={faHome} className="h-icon" />
        </Link>

        <Link to="/about">
          <FontAwesomeIcon icon={faInfoCircle} className="h-icon" />
        </Link>

        <Link to="/productList">
          <FontAwesomeIcon icon={faWrench} className="h-icon" />
        </Link>

        <Link to="/contact">
          <FontAwesomeIcon icon={faAddressBook} className="h-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
