import { Component } from "react"
class Filterbyinput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <div className="filter container">
                <div className="filter-by-input">
            <span>Looking for</span>
            <input
              type="text"
              name="name"
              placeholder="start typing here..."
              value={this.state.term}
              onChange={this.onUpdateSearch}
            ></input>
          </div>
            </div>
        )
    }
}

export default Filterbyinput
