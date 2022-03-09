import aromisticoSunset from "../../../../../img/Aromistico sunset.svg";
import "./item-article.scss";
import darkLogo from "../../../../../img/Dark Beans logo.svg";
const ItemArticle = () => {
  return (
    <div className="article container">
      <img src={aromisticoSunset} alt="Coffee Aromistico" />
      <div className="info-block">
        <div className="container">
          <h2>About Us</h2>
          <img src={darkLogo} alt="coffee beans" />
          <div className="text-block">
            <span>
              <b>Country:</b>Brazil
            </span>
            <span>
              <b>Description:</b>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
              et dolore magna aliqua. Ut enim ad minim veniam, quis <br />
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />
              commodo consequat.
            </span>
            <span>
              <b>Price:</b>
              <span className="price-item">16.99$</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemArticle;
