
import "../../../main-page/main-page.css"
import ItemsList from "./items-list/items-list"
import './ourBest.scss'

const OurBest = () => {
    return (
        <div className="best-items">
        <div className="container">
            <h2>Our best</h2>
            <ItemsList/>
        </div>
        </div>
    )
}

export default OurBest