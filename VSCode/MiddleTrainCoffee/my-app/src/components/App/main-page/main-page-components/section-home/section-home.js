import "../../main-page.css";
import logoBr from "/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/Beans logo.svg";

import Navbar from "../navbar/navbar";
const SectionHome = () => {
    return (
        <section className="menu">
      <div className="container">
        <Navbar />
      </div>
      <div className="info-block">
        <h1>Everything You Love About Coffee</h1>
        <img src={logoBr} alt="Coffee-beans" />
        <h2>We make every day full of energy and taste</h2>
        <h2>Want to try our beans?</h2>
        <button className='more'>More</button>
      </div>
    </section>
    )
}
export default SectionHome