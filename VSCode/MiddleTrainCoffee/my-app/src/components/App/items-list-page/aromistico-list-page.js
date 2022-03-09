import SectionOurCoffee from "./components/section-our-coffee/section-our-coffee";
import SideArticle from "./components/side-article/side.article";
import AppFilter from "./components/app-filters/button-filters/button-filters";
import Footer from "../main-page/main-page-components/footer/footer";
import AromisticoList from "./components/aromistico-list/aromistico-items-list";
import { Component } from "react";
import Filterbyinput from "./components/app-filters/input-filter/input-filter";

class ItemListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          country: "Brazil",
          id: 1,
        },
        {
          country: "Kenya",
          id: 2,
        },
        {
          country: "Columbia",
          id: 3,
        },
        {
          country: "Brazil",
          id: 4,
        },
        {
          country: "Brazil",
          id: 5,
        },
        {
          country: "Brazil",
          id: 6,
        },
      ],
      filterBy: '',
      term: '',
    };
  }
  onFilterSelect = (filterBy) => {
    if(filterBy === this.state.filterBy){
      this.setState({filterBy: ''});
    } else {
      this.setState({filterBy})
    }
    
  }
  filterPost = (data, filterBy) => {
    switch(filterBy) {
      case "Brazil": 
        return data.filter(item => item.country === 'Brazil');
      case "Kenya": 
        return data.filter(item => item.country === "Kenya");
      case "Columbia": 
        return data.filter(item => item.country === "Columbia");
      default: 
        return data
    }
  }
  onUpdateSearch = (term) => {
    this.setState({term})
  }
  searchCoffee = (data, term) => {
    if(term.length === 0) {
      return data
    }
    return data.filter(item => {
      return (item.country.toLowerCase()).indexOf(term.toLowerCase()) > -1
    })
  }
  render() {
    const { data, term, filterBy } = this.state;
    const visibleData = this.filterPost(this.searchCoffee(data, term), filterBy);

    return (
      <>
        <SectionOurCoffee />
        <SideArticle />
        <div className="filter">
        <Filterbyinput onUpdateSearch={this.onUpdateSearch}/>
        <AppFilter 
          onUpdateSearch = {this.onUpdateSearch}
          filterBy={filterBy}
          onFilterSelect={this.onFilterSelect}
        />
        </div>
        <AromisticoList data={visibleData} />
        <Footer />
      </>
    );
  }
}
export default ItemListPage;
