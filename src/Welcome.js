import {React, Component} from "react";
import fadeIn from "react-animations/lib/fade-in";
import styled, { keyframes } from "styled-components";

const getDiv = (left, top) =>{
  const fadeInAnimation = keyframes`${fadeIn}`;
  const FadeInDiv = styled.div`
    animation: infinite 5s ${fadeInAnimation};
    position: absolute;
    left: ${left}px;
    top: ${top}px;
  
  `;
  return FadeInDiv;

};
class Welcome extends Component {
  constructor(props) {  
    super(props);  
    this.state = { 
      counter: 1,
      // counter: this.props.initialPos,
      // intervalId: ''
    };
    // this.timer=this.timer.bind(this);

  }
  // componentDidMount(){
  //   const intervalId = setInterval(
  //     this.timer,5000
  //   );
  //   this.setState({intervalId : intervalId});
  // }
  // timer(){
  //   const counter = this.state.counter;
  //   this.setState({ 
  //     counter : counter + 100
  //   });
    
  // }

  // componentWillUnmount(){
  //   clearInterval(this.state.intervalId)
  // }
  
    render() {
      const FadeInDiv = getDiv(this.props.left,this.props.top);


      console.log(this.state.counter);

      return (
        <FadeInDiv>
          <h1>Hello Earnest!:D</h1>
        </FadeInDiv>
      );
    }
  }
export default Welcome;