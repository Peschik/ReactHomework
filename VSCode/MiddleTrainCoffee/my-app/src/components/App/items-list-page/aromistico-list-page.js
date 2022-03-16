import SectionOurCoffee from "./components/section-our-coffee/section-our-coffee";
import AppFilter from "./components/app-filters/button-filters/button-filters";
import Footer from "../main-page/main-page-components/footer/footer";
import AromisticoList from "./components/aromistico-list/aromistico-items-list";
import { Component } from "react";
import Filterbyinput from "./components/app-filters/input-filter/input-filter";
import {data} from "../items-list-page/components/index";
import AboutGoods from "../goods-page/components/about-goods/about-goods";
import sunsetCoffee from "../items-list-page/components/index";
import ReactDOM from 'react-dom';

class ItemListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      filterBy: '',
      term: '',
      advOpen: false
    };
  }

  showAdv = () => {
    this.setState(({advOpen}) => ({
      advOpen: !advOpen
    }))
  }

  componentDidMount() {
    setTimeout(this.showAdv, 2000)
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
        <AboutGoods 
          left={
          <img className="sm-mx-auto" src={sunsetCoffee} alt="Sunset with coffee" />
          }
          right={
            <p style={{'color' : 'black', 'textAlign' : 'center'}}>
            Extremity sweetness difficult behaviour he of. On <br />
            disposal of as landlord horrible.
            <br />
            <br />
            Afraid at highly months do things on at. Situation
            <br /> recommend objection do intention
            <br />
            so questions.
            <br /> As greatly removed calling pleased improve an.
            <br /> Last ask him cold feel
            <br />
            met spot shy want. Children me laughing we
            <br /> prospect answered followed. At it went
            <br />
            is song that held help face.
          </p>
          } />
        
        <div className="filter container">
        <Filterbyinput onUpdateSearch={this.onUpdateSearch}/>
        <AppFilter 
          onUpdateSearch = {this.onUpdateSearch}
          filterBy={filterBy}
          onFilterSelect={this.onFilterSelect}
        />
        </div>
        <AromisticoList data={visibleData} />
        <Footer />
        {this.state.advOpen ?
           <Banner>
             <CloudMessage />
            </Banner> : null}
        
      </>
    );
  }
}

const Banner = (props) => {
  const node = document.createElement('div')
  document.body.appendChild(node);

  return ReactDOM.createPortal(props.children, node)
}

const CloudMessage = () => {
  return (
    <div className="dialog">
         <span>Would u like to buy something? Please, write us!</span>
         <input type='text' />
    </div>
  )
}


export default ItemListPage;

/*renderProps - когда необходимо передать функцию в какой-то компонент или отрендерить, но не привязать компонент жестко к родителю*/