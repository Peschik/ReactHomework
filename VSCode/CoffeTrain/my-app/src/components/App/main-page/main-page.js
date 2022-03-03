import "./main-page.css";
import logoBr from "/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/Beans logo.svg";
import Navbar from "./header-main-page";
// import styled from "styled-components";
// import "https://fonts.googleapis.com/css2?family=Merienda&family=MuseoModerno:wght@600&family=Roboto:wght@100&display=swap";


const MainPage = () => {
  return (
    <section className="menu">
      <div className="container">
        <Navbar />
      </div>
      <div className="hero">
        <h1>Everything You Love About Coffee</h1>
        <img src={logoBr} alt="Coffee-beans" />
        <h2>We make every day full of energy and taste</h2>
        <h2>Want to try our beans?</h2>
      </div>
    </section>
  );
};

export default MainPage;
