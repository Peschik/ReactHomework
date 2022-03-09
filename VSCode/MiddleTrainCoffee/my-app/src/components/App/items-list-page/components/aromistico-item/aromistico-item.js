import "../../../main-page/main-page-components/our-best/item-best/item-best.scss"
import "../../../main-page/main-page-components/about/about.scss"
import "./aromistico-item.scss";
import { Link } from "react-router-dom";

import aromistico from "../../../../../img/Aromistico.svg"
const AromisticoItem = (props) => {
    const {country} = props

    return (
        <li>
            <div className="container">
                <Link to="/aromistico_item" className="item-coffee">
                <img src={aromistico} alt="aromistico item" />
                <p>AROMISTICO Coffee 1 kg</p>
                <div className="items-info">
                <span className="country">{country}</span>
                <span className="price">6.99$</span>
              </div>
                </Link>
            </div>
        </li>
    )
}

export default AromisticoItem