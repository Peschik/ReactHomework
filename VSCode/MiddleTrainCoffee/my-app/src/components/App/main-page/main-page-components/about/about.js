import "../../../main-page/main-page.css";
import "./about.scss";
import darkLogo from "/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/Dark Beans logo.svg";

const About = (props) => {
  return (
    <div className="info-block">
      <div className="container">
        <h2>About Us</h2>
        <img src={darkLogo} alt="coffee beans" />
        {props.children}
      </div>
    </div>
  );
};
export default About;
