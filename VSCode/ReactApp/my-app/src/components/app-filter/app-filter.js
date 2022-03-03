import './app-filter.css'


const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники', colored: false},
        {name: 'rise', label: 'На повышение', colored: true},
        {name: 'moreThen1000', label: 'З/П больше 1000$', colored: false},
    ];


// const Wrapper = styled.div`
// width: 600px;
// margin: 80px auto 0 auto;
// `;
    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filterBy === name;
        const clazz = active ? 'btn-light' : ' btn-outline-light';
        const style = colored ? {color: 'red'} : null

        return (
            <button 
                className={`btn ${clazz}`}
                type='button'
                key={name}
                style={style}
                onClick={() => props.onFilterSelect(name)}>

                    {label}
                </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
            {/* <button 
                className="btn btn-light"
                type='button'>
                    Все сотрудники
                </button>
            <button 
            className="btn btn-outline-light"
            type='button'>
                
            </button><button 
            className="btn btn-outline-light"
            type='button'>
                З/П больше 1000$
            </button> */}
        </div>
    )
}

export default AppFilter;