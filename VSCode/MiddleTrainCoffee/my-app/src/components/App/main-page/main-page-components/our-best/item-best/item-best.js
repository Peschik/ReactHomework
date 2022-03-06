import "./item-best.scss";
import "../../about/about.scss";
import items from '../../../../../../img/items-main-page/items-best.json'

const Item = () => {
  return (
    items.map(item => {
      return (
        <li key={item.id}>
          <div className="container">
            <div className="itemBest">
              <img src={item.photo} alt={item.alt} />
              <div className="item-info">
                <p>{item.name}</p>
                <span className="price">{item.price + "$"}</span>
              </div>
            </div>
          </div>
        </li>
      );
    })
  )
  
};

export default Item;
