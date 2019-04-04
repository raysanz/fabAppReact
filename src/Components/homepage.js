import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Row, Col, Container, Jumbotron, Card } from 'react-bootstrap';

import CarouselPage from "../Components/carousel"


const Home = () => (
    <div className="container">
        <div class="offerBar container">
            <span class="thin">NEW VIP OFFER</span>
            <span class="thick">50% off Site-Wide</span>
        </div>
        <CarouselPage />
        <div className="offerBox container">
            <a href="//www.fabkids.com/index.cfm?action=signup.main&amp;promo=mpsbogo" class="">
                <img src="https://www.slon.pics/wp-content/uploads/2017/10/Shopping-cart-with-60-discount-sign.-3D-illustration.-Isolated.-Contains-clipping-path.jpg" />
            </a>
        </div>
        <div className="container">
            <Button variant="primary" size="lg" block>
                SHOP NOW
  </Button>
        </div>

        <Container>
            <Row>
                {/* IMAGE 1 */}
                <Col>
                    <Card >
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* IMAGE 2 */}
                <Col>
                    <Card >
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* IMAGE 3 */}
                <Col>
                    <Card >
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* IMAGE 4 */}
                <Col>
                    <Card s>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>


        <Jumbotron fluid>
            <Container>
                <h1>FOOTER</h1>
                <p>
                    FOOTER DETAILS HERE
    </p>
            </Container>
        </Jumbotron>;
    </div>

)

export default Home;
