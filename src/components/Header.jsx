/*

Header
    ->links
    -> login,logout button

*/

import "./header.scss";
import FoodFireLogo from "../assets/Food Hub.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Title = () => {
  return (
    <a href="#logo">
      <img
      key="logo"
        className="logo"
        src={FoodFireLogo}
        alt="Food Fire"
        title="Food Fire"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="">About</Link></li>

          <li><Link to="">Contact</Link></li>
          <li>
          <Link to=""><FontAwesomeIcon icon={faCartShopping}/></Link>
          </li>
          <li >logIn</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
