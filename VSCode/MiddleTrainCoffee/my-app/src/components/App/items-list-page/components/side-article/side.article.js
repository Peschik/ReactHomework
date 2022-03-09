import sunsetCoffee from "../index";
import "./side-article.scss";
import "../../../main-page/main-page-components/about/about.scss";
import darkLogo from "/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/Dark Beans logo.svg";

const SideArticle = () => {
  return (
    <>
    <div className="article container">
      <aside>
        <img src={sunsetCoffee} alt="Sunset with coffee" />
      </aside>
      <article className="info-block">
        <div className="container">
          <h2>About our beans</h2>
          <img src={darkLogo} alt="coffee beans" />
          <p>
            Extremity sweetness difficult behaviour he of. On <br />
            disposal of as landlord horrible.
            <br />
            <br />
            Afraid at highly months do things on at. Situation
            <br /> recommend objection do intention
            <br />
            so questions.
            <br /> As greatly removed calling pleased improve an.
            <br /> Last ask him cold feel
            <br />
            met spot shy want. Children me laughing we
            <br /> prospect answered followed. At it went
            <br />
            is song that held help face.
          </p>{" "}
        </div>
      </article>
      
    </div>
    <hr />
    </>
  );
};

export default SideArticle;
