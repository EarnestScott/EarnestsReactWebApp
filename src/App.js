import logo from './logo.svg';
import './App.css';
import { React, Component } from "react";

// import FadeOutLeftDiv from './FadeOut'
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import { fadeIn } from "react-animations";
import Welcome from './Welcome';
import './test.css'
const bounceAnimation = keyframes`${bounce}`;
const BouncyDiv = styled.div`
  animation: infinite 5s ${bounceAnimation};
  position: absolute;
  left: 500px;
  top: 500px;

`;
const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: infinite 5s ${fadeInAnimation};
  position: absolute;
  left: 500px;
  top: 500px;

`;
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    }

  }

  render() {
    console.log(this.state.counter);

    return (
      <div className="App">
        <div id="toor"></div>
        <h1>{this.state.counter}</h1>
        <Welcome initialHor={this.state.counter} delay={5000} initialVert={200}></Welcome>
        <Welcome initialHor={300} delay={1000} initialVert={200}></Welcome>
        <Welcome initialHor={500} delay={3000} initialVert={200}></Welcome>
        <div className="play">
          <BouncyDiv>
            <img src="https://picsum.photos/300/200/?random" />
          </BouncyDiv>
        </div>

      </div>
    );
  }
}
export default App;
