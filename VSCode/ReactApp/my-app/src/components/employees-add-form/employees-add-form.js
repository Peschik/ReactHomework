import { Component } from 'react';
// import './employees-add-form.css'
import './employees-add-form.scss'

class EmployeesAddForm extends Component {
    state = {
            name: '',
            salary: '',
        }
    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name &&
           this.state.salary &&
           this.state.name.length > 3
            ){
               this.props.onAdd(this.state.name, this.state.salary) 
            }
        this.setState({
            name: '',
            salary: '',
        })
    }

    // static onLog = () => {
    //     console.log('Hey')
    // }

    // static logged = 'on'

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>To add a new employee</h3>
                <form 
                     className="add-form d-flex"
                     onSubmit = {this.onSubmit}>
                    <input type="text" 
                        className="form-control new-post-label"
                        placeholder="What's his name?" 
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number" 
                        className="form-control new-post-label"
                        placeholder="How much is his salary?" 
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button 
                        type='submit' 
                        className="btn btn-outline-light"
                        >
                        Add!
                    </button>
                </form>
            </div>
        )
    }
}

// EmployeesAddForm.onLog()
// console.log(EmployeesAddForm.logged)

export default EmployeesAddForm;