import "./main-page.css";
import About from "./main-page-components/about/about";
import OurBest from "./main-page-components/our-best/ourBest";
import Footer from "./main-page-components/footer/footer";
import SectionHome from "./main-page-components/section-home/section-home";

const MainPage = () => {
  return (
    <>
      <SectionHome />
      <About>
        <p>
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible.
          <br />
          Afraid at highly months do things on at. Situation recommend objection
          do intention
          <br />
          so questions. As greatly removed calling pleased improve an. Last ask
          him cold feel
          <br />
          met spot shy want. Children me laughing we prospect answered followed.
          At it went
          <br />
          is song that held help face.
        </p>
        <p>
          Now residence dashwoods she excellent you. Shade being under his bed
          her, Much
          <br />
          read on as draw. Blessing for ignorant exercise any yourself unpacked.
          Pleasant
          <br />
          horrible but confined day end marriage. Eagerness furniture set
          preserved far
          <br />
          recommend. Did even but nor are most gave hope. Secure active living
          depend son
          <br />
          repair day ladies now.
        </p>
      </About>
      <OurBest />
      <Footer />
    </>
  );
};

export default MainPage;
