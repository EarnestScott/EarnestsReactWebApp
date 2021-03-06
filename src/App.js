import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import earnest from './coachella_copy.jpg';
import derpPic from './derpPic.jpg'
import './App.css';
import fetch from 'node-fetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function App() {
    const [showDerpPic, setShowDerpPic] = useState(false);
    const [reviewUser, setReviewUser] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [validated, setValidated] = useState(true);
    const [apiResponse, setApiResponse] = useState([]);
    const [createdComment, setCreatedComment] = useState({});

    const callApi = async () => {
        const response = await fetch('/comments');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    useEffect(() => {
        callApi().then(res => setApiResponse(res)).catch(err => console.log(err));
    }, [createdComment])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const body = {
            author: reviewUser,
            comment: reviewText
        }
        const response = await fetch('/comments', {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
        const resJson = await response.json();
        setCreatedComment(resJson);
        setReviewUser('');
        setReviewText('');
        console.log(resJson);
    };
    const handleReviewerNameChange = (event) => {
        setReviewUser(event.target.value);
    }
    const handleReviewerCommentChange = (event) => {
        setReviewText(event.target.value);
    }
    return (
        <div className="App">
            <Jumbotron fluid>
                <Container>
                    <Row className="justify-content-md-center">
                        <h1>Earnest Scott</h1>
                        <p>{reviewUser}</p>

                    </Row>
                    <Row className="justify-content-md-center">
                        <h3>The man, the myth, the legend</h3>
                        {/* <p>{apiResponse}</p> */}

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
                    <br />
                    <br />
                    <Row>
                        <h1>Reviews</h1>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <h4>Anonymous</h4>
                        </Col>
                        <Col xs={9}><p>Earnest is super cool! Like the coolest!</p></Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <h4>Anonymous</h4>
                        </Col>
                        <Col xs={9}><p>Mr.Scott is super cool! Like the coolest!</p></Col>
                    </Row>
                    {apiResponse.map((res, index) => (<Row key={index}><Col xs={3}><h4>{res.author}</h4></Col><Col xs={9}><p>{res.comment}</p></Col></Row>))}

                    <br />
                    <br />
                    <Row>
                        <h1>Would you like to leave a review of Earnest Scott?</h1>
                        <Col sm={6}>
                            {/* <Form noValidate validated={validated} onSubmit={handleSubmit} > */}
                            <Form onSubmit={handleSubmit} >
                                <Form.Group controlId="name">
                                    <Form.Label style={{ float: 'left' }}>Enter your name</Form.Label>
                                    <Form.Control type="input" placeholder="Earnest Scott" value={reviewUser} onChange={handleReviewerNameChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="comment">
                                    <Form.Label style={{ float: 'left' }}>Example textarea</Form.Label>
                                    <Form.Control as="textarea" placeholder="sucks" value={reviewText} onChange={handleReviewerCommentChange} rows={3} required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a comment.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                    </Row>
                </Container>

            </Jumbotron>
        </div>
    )
}

export default App;
