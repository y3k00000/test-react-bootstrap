import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron,Button,Navbar,NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink, Container, Row, Col} from 'reactstrap';
import {Media, Player, controls} from 'react-media-player';
const {PlayPause,MuteUnmute} = controls;

class FakeImage extends Component {
  render(){
    return(
      <div className={"text-center"} style={{height:200,background:'#aaa'}}>This Is Somehow A Fake Image</div>
    )
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen : false
    }
  }
  toggleNavBar(){
    this.setState({isOpen:!this.state.isOpen});
  }
  render() {
    return (
    <div>
      <Jumbotron className="text-center" style={{"margin-bottom":0}}>
        <img className="App-logo" src={logo}></img>
        <h1>My First Bootstrap 4 Page</h1>
        <p>Resize this responsive page to see the effect!</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
        <Media>
          <div>
            <Player src="http://www.youtube.com/embed/yUlTIAuDuJQ"/>
            <br/>
            <PlayPause />
            <MuteUnmute />
          </div>
        </Media>
      </Jumbotron>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="#">Navbar</NavbarBrand>
        <NavbarToggler onClick={()=>{this.toggleNavBar();}} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">LinkA</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">LinkA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">LinkA</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container style={{marginTop:30}}>
        <Row>
          <Col sm={4}>
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <FakeImage />
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3>Some Links</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <Nav pills>
              <NavItem>
                <NavLink active href="#">Active</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">Disabled</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={8}>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <FakeImage/>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <br/>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <FakeImage/>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </Col>
        </Row>
      </Container>
      <Jumbotron className="text-center" style={{marginBottom:0}}>
        <p>Fooooooter</p>
      </Jumbotron>
    </div>
    );
  }
}

export default App;
