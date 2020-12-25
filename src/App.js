import logo from './logo.svg';
import './App.css';
import { React, Component } from "react";
import ButtonAppBar from './components/ButtonAppBar'
// import FadeOutLeftDiv from './FadeOut'
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import { fadeIn } from "react-animations";
import Welcome from './Welcome';
import { ThemeProvider } from '@material-ui/core/styles';
import theme2 from './components/theme';
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
    const quotes = ["Everything is limiting beliefs and self-fulfilling prophecies.\n\t\t-Earnest Scott",
      "Virtually everything we do is to change the way we feel\n\t\tAwaken the Giant Within\n\t\t-Tony Robbins",
      "Life is a gift and it offers us the privilege, opportunity, and responsibility to give something back by becoming something more.\n\t\tAwaken the Giant Within\n\t\t-Tony Robbins",
      "We are not driven by the reality but by our perception of reality\n\t\tAwaken the Giant Within\n\t\t-Tony Robbins",
      "Nothing in Life has any meaning except the meaning you give it.\n\t\tAwaken the Giant Within\n\t\t-Tony Robbins",
    ];
    Math.round(Math.random() * (quotes.length - 1))

    return (
      <div className="App">
        <div id="toor">
          <ThemeProvider theme={theme2}>
            <ButtonAppBar />

          </ThemeProvider>

        </div>
        {/* <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
    </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar> */}
        <h1>Earnest Scott</h1>
        <Welcome message={quotes[Math.round(Math.random() * (quotes.length - 1))]} initialHor={this.state.counter} delay={5000} initialVert={200}></Welcome>
        <Welcome message={quotes[Math.round(Math.random() * (quotes.length - 1))]} initialHor={300} delay={1000} initialVert={200}></Welcome>
        <Welcome message={quotes[Math.round(Math.random() * (quotes.length - 1))]} initialHor={500} delay={3000} initialVert={200}></Welcome>
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
