import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink, Container, Row, Col, Carousel, CarouselItem, CarouselControl, Card, CardBody, CardSubtitle, CardText} from 'reactstrap';
import ReactPlayer from 'react-player';
import {Media, Player, controls} from 'react-media-player';
import Youtube from 'react-youtube';
import urlParser from "js-video-url-parser/lib/base";
import 'js-video-url-parser/lib/provider/youtube';
const {PlayPause,MuteUnmute} = controls;

class FakeImage extends Component {
  render(){
    return(
      <div className={"text-center"} style={{height:200,background:'#aaa'}}>This Is Somehow A Fake Image</div>
    )
  }
}

class YoutubeVideo extends Component{
  render(){
    return(
      <Media>
        <Container fluid>
          <Player src={this.props.src||"http://www.youtube.com/embed/yUlTIAuDuJQ"} />
          <br />
          <PlayPause />
          <MuteUnmute />
        </Container>
      </Media>
    );
  }
}

class PureYoutubeVideo extends Component{
  render() {
    return (
      <Youtube
        videoId={this.props.src?urlParser.parse(this.props.src).id:"2g811Eo7K8U"}
        opts={{
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        }}
        onReady={this._onReady}
      />
    );
  }
  _onReady(event) {
    // event.target.pauseVideo();
  }
}

class ReactPlayerYoutube extends Component{
  render(){
    return (
      <div className="player-wrapper">
        <ReactPlayer url={this.props.src||"https://www.youtube.com/watch?v=yUlTIAuDuJQ"} style={{width:'100%',height:'100%'}} />
      </div>
    );
  }
}

class YoutubeCarousel extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeIndex:0
    };
    this.videos = new Array(5).fill(React.createRef());
  }
  next(){
    console.log("next()");
    this.setState({
      activeIndex:this.state.activeIndex+1===this.getSrcList().length?0:this.state.activeIndex+1
    });
  }
  previous(){
    console.log("previous");
    this.setState({
      activeIndex:this.state.activeIndex-1<0?this.getSrcList().length-1:this.state.activeIndex-1
    });
  }
  exiting(){
    this.animating = true;
  }
  exited(){
    this.animating = false;
  }
  getSrcList(){
    return this.props.srcList||[];
  }
  render(){
    return(
      <Carousel activeIndex={this.state.activeIndex} next={this.next.bind(this)} previous={this.previous.bind(this)} interval={false}>
        {this.getSrcList().map((src, index) => (
          <CarouselItem key={index} onExiting={this.exiting.bind(this)} onExited={this.exited.bind(this)}>
            <PureYoutubeVideo src={src} />
          </CarouselItem>)
        )}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous.bind(this)} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next.bind(this)} />
      </Carousel>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen : false,
      message : "N/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/AN/A"
    }
  }
  componentWillMount(){
    var self = this;
    if(window.liff){
      window.liff.init(function (data) {
        self.setState({
          message:JSON.stringify(data)
        })
      });
    }
  }
  toggleNavBar(){
    this.setState({isOpen:!this.state.isOpen});
  }
  render() {
    return (
    <div>
      <Jumbotron className="text-center" style={{"marginBottom":0}}>
        <img className="App-logo" src={logo}></img>
        <h1>My First Bootstrap 4 Page</h1>
        <p>Resize this responsive page to see the effect!</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
        <YoutubeCarousel srcList={["http://www.youtube.com/embed/yUlTIAuDuJQ", "http://www.youtube.com/embed/o7SZkwSmIec", "http://www.youtube.com/embed/yUlTIAuDuJQ", "http://www.youtube.com/embed/o7SZkwSmIec"]}/>
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
        <Row>
          <Card>
            <CardBody>
              <CardSubtitle>
                Line Info
              </CardSubtitle>
              <CardText>
                {this.state.message}
              </CardText>
            </CardBody>
          </Card>
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
