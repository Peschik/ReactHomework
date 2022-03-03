import "./main-page.css";
import logo from "/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/Group.svg";

const Navbar = () => {
    return ( <nav className="navbar">
<div className="symbol_item">
  <img className="symbol_coffee" src={logo} alt="Coffee Beans" />
  <a href="..." className="navbar_item">
    Coffee house
  </a>
</div>
<a href="..." className="navbar_item">
  Our coffee
</a>
<a href="..." className="navbar_item">
  For your pleasure
</a>
</nav>
    )
}

export default Navbar;