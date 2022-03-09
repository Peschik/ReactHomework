import './navbar.scss'
import { Link } from 'react-router-dom';

import logo from "/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/Group.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="symbol_coffee" src={logo} alt="Coffee Beans" />
        <Link to='/' className="navbar_item">
          Coffee house
        </Link>
      </div>
      <Link to="/aromistico_list" className="navbar_item">
        Our coffee
      </Link>
      <a href="..." className="navbar_item">
        For your pleasure
      </a>
    </nav>
  );
};

export default Navbar;
