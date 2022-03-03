import { Component } from "react";

import Appinfo from "../app-info/app-info";
import SearchPanel from "../search-pannel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import "./app.css";
import EmployeesAddForm from "../employees-add-form/employees-add-form";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "John C.",
          salary: 800,
          increase: false,
          rise: false,
          id: 1
        },
        {
          name: "Steve D.",
          salary: 3000,
          increase: true,
          rise: false,
          id: 2
        },
        {
          name: "Michael A.",
          salary: 10500,
          increase: false,
          rise: true,
          id: 3
        },
      ],
      term: '',
      filterBy: 'all'
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id);

      
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newArr = [...before, ...after];

      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  onToggleProp = (id, prop) => {
    // this.setState(({data}) => {
    //   // const index = data.findIndex(elem => elem.id === id);

    //   // const old = data[index];
    //   // const newItem = {...old, increase: !old.increase};
    //   // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //   // return {
    //   //   data: newArr
    //   // }

    // })
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filterBy) => {
    switch (filterBy) {
      case 'rise': 
        return items.filter(item => item.rise);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items
    }
  }

  onFilterSelect = (filterBy) => {
    this.setState({filterBy})
  }

  render(){
    
    
    const {data, term, filterBy} = this.state;
    const employeeNumber = this.state.data.length;
    const employeeIncreased = this.state.data.filter(item => {
      return item.increase === true
    });
    const visibleData = this.filterPost(this.searchEmp(data, term), filterBy)
    return (
      <div className="app">
        <Appinfo employeeNumber={employeeNumber}
                 employeeIncreased={employeeIncreased.length}/>

  
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter 
          filter={filterBy}
          onFilterSelect={this.onFilterSelect}/>
        </div>
  
        <EmployeesList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          
          />
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
