import "./main-page.css";
import logoBr from "/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/Beans logo.svg";
import Navbar from "./header-main-page";
import styled from "styled-components";
// import "https://fonts.googleapis.com/css2?family=Merienda&family=MuseoModerno:wght@600&family=Roboto:wght@100&display=swap";

const Header = styled.div`
margin-top: 50px;
  margin-bottom: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 58px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`


const MainPage = () => {
  return (
    <section className="menu">
      <div className="container">
        <Navbar />
      </div>
      <div className="hero">
        <Header>Everything You Love About Coffee</Header>
        <img src={logoBr} alt="Coffee-beans" />
        <h2>We make every day full of energy and taste</h2>
        <h2>Want to try our beans?</h2>
        <button class='more'>More</button>
      </div>
    </section>
  );
};

export default MainPage;
