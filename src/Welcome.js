import {React, Component} from "react";
import fadeIn from "react-animations/lib/fade-in";
import styled, { keyframes } from "styled-components";

const getDiv = (left, top) =>{
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
      // counter: 1,
      horizontal: this.props.initialHor,
      vertical: this.props.initialVert,
      intervalId: '',
      renderTimeout: '',
      showText: false
    };
    this.timer=this.timer.bind(this);

  }
   componentDidMount(){
    const renderDelayBy = Math.round(Math.random() * 8000);

     console.log("in component did mount");
    // const renderDelayBy = Math.round(Math.random() * 5000);
    //   const renderTimeout = setTimeout(() => {
    //     console.log(`Delay component by ${renderDelayBy}`);
    //     this.setState({
    //       showText: true,
    //     })
    //   }
    //     ,renderDelayBy);
      const intervalId = setInterval(
        // this.timer,5000
        this.timer,renderDelayBy
        );
    this.setState({
      intervalId : intervalId,
      // renderTimeout: renderTimeout
    });
  }
   //componentDidUpdate(prevProps,prevState){
    // if (prevState.horizontal !== this.state.horizontal || prevState.vertical !== this.state.vertical){
    //   console.log("In here");
    //   //const renderDelayBy = Math.round(Math.random() * 8000);
    //   const renderDelayBy = this.props.delay;
      
    //   const renderTimeout = setTimeout(() => {
    //     console.log(`Delay component by ${renderDelayBy}`);
    //     // this.setState({
    //     //   showText: true,
    //     // })
    //   }
    //     ,renderDelayBy);
    //     // clearInterval(await renderTimeout);

    //}


  //}
  timer(){
    this.setState({ 
      horizontal : Math.round(Math.random() * 1000),
      vertical : Math.round(Math.random() * 500)

    });
    
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalId);
    // clearInterval(this.state.renderTimeout);

  }
  
   render() {
      // const renderDelayBy = Math.round(Math.random() * 50000);
      // const renderTimeout = setTimeout(() => console.log(`Delay component by ${renderDelayBy}`),renderDelayBy);
      // clearInterval(renderTimeout);
      // const { showText } = this.state;

      const FadeInDiv = getDiv(this.state.horizontal,this.state.vertical);



      return (
        // showText && 
        <FadeInDiv>
          <h1>Hello Earnest!:D</h1>
        </FadeInDiv>
      );
    }
  }
export default Welcome;