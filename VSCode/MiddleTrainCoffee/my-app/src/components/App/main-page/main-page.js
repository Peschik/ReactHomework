import "./main-page.css";
import About from "./main-page-components/about/about";
import OurBest from "./main-page-components/our-best/ourBest";
import Footer from "./main-page-components/footer/footer";
import SectionHome from "./main-page-components/section-home/section-home";


const MainPage = () => {
  return (
    <>
    <SectionHome />
    <About />
    <OurBest/>
    <Footer />
    </>
  );
};

export default MainPage;
