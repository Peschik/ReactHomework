import GoodsSectionMenu from "./components/section-goods/section-goods";
import AromisticoList from "../items-list-page/components/aromistico-list/aromistico-items-list";
import { data } from "../items-list-page/components";
import Footer from "../main-page/main-page-components/footer/footer";
import AboutGoods from "./components/about-goods/about-goods";
import About from "../main-page/main-page-components/about/about";
import greyCup from '../../../../src/img/grey.svg';

const GoodsPage = () => {
  return (
    <>
      <GoodsSectionMenu />
      <AboutGoods
        left={<img src={greyCup} alt="Sunset with coffee" />}
        right={
          <About>
            <p>
              Extremity sweetness difficult behaviour he of.On<br />
              disposal of as landlord horrible.<br />
            <br />
              Afraid at highly months do things on at.Situation<br />
               recommend objection do intention<br />
              so questions.<br /> As greatly removed calling pleased improve
              an.<br /> Last ask him cold feel<br />
              met spot shy want.Children me laughing we<br /> prospect answered
              followed.At it went<br />
              is song that held help face.
            </p>
          </About>
        }
      />{" "}
      <AromisticoList data={data} /> <Footer />
    </>
  );
};

export default GoodsPage;
