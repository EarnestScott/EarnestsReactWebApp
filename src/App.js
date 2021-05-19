import logo from './logo.svg';
import React, { useState } from 'react';
import earnest from './coachella_copy.jpg';
import derpPic from './derpPic.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
    const [showDerpPic, setShowDerpPic] = useState(false);


    return (
        <div className="App">
            <Jumbotron fluid>
                <Container>
                    <Row className="justify-content-md-center">
                        <h1>Earnest Scott</h1>

                    </Row>
                    <Row className="justify-content-md-center">
                        <h3>The man, the myth, the legend</h3>

                    </Row>
                    <br />
                    <br />
                    <br />

                    <Row>
                        <Col sm={6}>
                            <Card style={showDerpPic ? { padding: '5px', transform: 'rotate(45deg)' } : { padding: '5px', }} >
                                <Card.Img onMouseEnter={() => setShowDerpPic(true)} onMouseLeave={() => setShowDerpPic(false)} src={showDerpPic ? derpPic : earnest} />
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <h2>Who is Earnest Scott?</h2>
                            <p>Epluribus enum</p>
                        </Col>
                    </Row>

                </Container>

            </Jumbotron>
        </div>
    )
}

export default App;
