import { React, Component } from "react";
import fadeIn from "react-animations/lib/fade-in";
import styled, { keyframes } from "styled-components";

const getDiv = (left, top) => {
  const fadeInAnimation = keyframes`${fadeIn}`;
  const FadeInDiv = styled.div`
    animation: infinite 7s ${fadeInAnimation};
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
      horizontal: this.props.initialHor,
      vertical: this.props.initialVert,
      intervalId: '',
    };
    this.timer = this.timer.bind(this);

  }
  componentDidMount() {
    const renderDelayBy = Math.round(Math.random() * 8000);

    const intervalId = setInterval(
      this.timer, renderDelayBy
    );
    this.setState({
      intervalId: intervalId,
    });
  }

  timer() {
    this.setState({
      horizontal: Math.round(Math.random() * 1000),
      vertical: Math.round(Math.random() * 500)

    });

  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);

  }

  render() {

    const FadeInDiv = getDiv(this.state.horizontal, this.state.vertical);

    return (
      <FadeInDiv>
        <h1>Hello Earnest!:D</h1>
      </FadeInDiv>
    );
  }
}
export default Welcome;