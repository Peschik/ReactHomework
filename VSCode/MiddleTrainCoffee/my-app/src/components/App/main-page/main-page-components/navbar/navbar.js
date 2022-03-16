import './navbar.scss'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/Group.svg";
import React, { Component } from 'react';


class Navbar extends Component {
  // state = {
  //   mail: ''
  // }
  // myRef = React.createRef();
  // firstInput = React.createRef()
  
  // componentDidMount() {
  //   window.scrollTo(0, this.myRef.current.scrollHeight);
  //   if(this.state.mail.indexOf('@', '.com') < 0) {
  //   this.firstInput.current.focus();
  // }
  // }

  // onEnterMail = (e) => {
  //   const mail = e.target.value;
  //       this.setState({mail});
  // }

  // onCheckMail = () => {
  //   if(this.state.mail.indexOf('@', '.') < 0) {
  //     this.firstInput.current.focus();
  //   }
  // }
   
  render() {
    return (
      <Container className="navbar mx-auto mb-4">
        <Row className='row-cols-auto align-items-center justify-content-start'>
        <Col>
        <div ref={this.myRef}>
          <img className="symbol_coffee" src={logo} alt="Coffee Beans" />
          <Link to='/' className="navbar_item">
            Coffee house
          </Link>
        </div>
        </Col>
        <Col>
        <Link to="/aromistico_list" className="navbar_item">
          Our coffee
        </Link>
        </Col>
        <Col>
  
        <Link to="/for_your_pleasure" className="navbar_item">
          For your pleasure
        </Link>
        </Col>
        </Row>
            {/* <div className="mb-3 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
        <input ref={this.firstInput} onChange={this.onEnterMail} type="email" className="form-control" value={this.state.mail} id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input onChange={this.onCheckMail} type="password" className="form-control ml-4" id="inputPassword" />
        </div>
      </div> */}
      </Container>
      
    );
  }
};

export default Navbar;
