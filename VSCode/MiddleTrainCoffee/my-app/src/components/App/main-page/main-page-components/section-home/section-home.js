import "../../main-page.css";
import logoBr from "/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/Beans logo.svg";

import Navbar from "../navbar/navbar";
const SectionHome = () => {
    return (
        <section className="menu main-page">
      <div className="container">
        <Navbar />
      </div>
      <div className="info-block">
        <h1 className="mb-5">Everything You Love About Coffee</h1>
        <img src={logoBr} alt="Coffee-beans" className="mb-5" />
        <h2>We make every day full of energy and taste</h2>
        <h2>Want to try our beans?</h2>
        <button className='more mt-5'>More</button>
      </div>
    </section>
    )
}
export default SectionHome