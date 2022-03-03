import './app-info.css';


const Appinfo = ({employeeNumber, employeeIncreased}) => {
    
        return (
            <div className="app-info">
                <h1>
                    Учет сотрудников в компании N
                </h1>
                <h2>Общее число сотрудников: {employeeNumber}</h2>
                <h2>Премию получат:{employeeIncreased}</h2>
            </div>        
        )
    }


export default Appinfo;