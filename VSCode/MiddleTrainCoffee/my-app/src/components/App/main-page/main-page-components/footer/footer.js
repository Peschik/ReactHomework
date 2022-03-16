import "./footer.scss";
import "../navbar/navbar.scss";
import "../../main-page.css";
import transparentLogo from "/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/transparentLogo.svg";
import logoEnd from "/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/logo end.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer container">
      <nav className="footer-navbar">
        <div>
          <img src={transparentLogo} alt="logo coffee" />
          <Link to='/'>Coffee house</Link>
        </div>
        <Link to='/aromistico_list'>Our coffee</Link>
        <Link to="/for_your_pleasure">For your pleasure</Link>
      </nav>
      <div className="logo-end">
          <img src={logoEnd} alt="logo - end of the page" />
      </div>
    </footer>
  );
};
export default Footer;
