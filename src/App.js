import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
//import logo from './logo.svg';
import './App.css';
import {Display} from './Display';
import {DrumMachineBody} from './DrumMachineBody';
import {availableKeys} from './DrumSounds';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      screenValue: null,
    };
  }

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  }

  playMusic = (audioSrc) => {
    const music = new Audio(audioSrc);
    music.play();
  }


  buttonOnClick = e => {
    this.setState({
      screenValue: e.target.id
    })
    //play audio
    this.playMusic(e.target.children[e.target.value].src);
  }

  handleKeyPress = e => {
    const keyValue = availableKeys[e.key];
    if(keyValue){
      this.setState({
        screenValue: keyValue
      })
    }
    //play audio
    this.playMusic(e.target.children[e.target.value].src);
  }


  
  render() {
    return (
        <Container className="App" id="drum-machine">
              <Row style={{height:30}}/>
              <Row>
                <Col md={{ size: 4, offset: 4 }}>
                  <Display value={this.state.screenValue}/>
                </Col>
              </Row>
              <Row>
                <Col md={{ size: 4, offset: 4 }}>
                  <DrumMachineBody onClick={this.buttonOnClick} onKeyPress={this.handleKeyPress}/>
                </Col>
              </Row>
        </Container>
    );
  }
}