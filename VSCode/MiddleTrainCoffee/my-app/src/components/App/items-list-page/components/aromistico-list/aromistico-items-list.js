
import "../../../main-page/main-page-components/our-best/items-list/items-list.scss"
import "./aromistico-items-list.scss"
import AromisticoItem from "../aromistico-item/aromistico-item"

const AromisticoList = ({data}) => {
    const elements = data.map(item => {
        const { id, ...itemProps} = item
        return (
            <AromisticoItem
            key={id}
            {...itemProps}
            />
        )
    })
    return (
       <div className="container">
        <ul>
            {elements}

        </ul>
       </div>
    )
}

export default AromisticoList
