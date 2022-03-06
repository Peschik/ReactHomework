import "./footer.scss";
import "../navbar/navbar.scss";
import "../../main-page.css";
import transparentLogo from "/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/transparentLogo.svg";
import logoEnd from "/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/logo end.svg";
const Footer = () => {
  return (
    <footer className="footer container">
      <nav className="footer-navbar">
        <div>
          <img src={transparentLogo} alt="logo coffee" />
          <a href ='...'>Coffee house</a>
        </div>
        <a href ='...'>Our coffee</a>
        <a href ='...'>For your pleasure</a>
      </nav>
      <div className="logo-end">
          <img src={logoEnd} alt="logo - end of the page" />
      </div>
    </footer>
  );
};
export default Footer;
