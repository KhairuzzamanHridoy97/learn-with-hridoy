import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row,Button ,Col, Container} from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            <h2 className="welcome-about">I am Hridoy</h2>
            <p><small>Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Hridoy is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn</small></p>
            <div>
                <h3>Are you ready to Join  With Our Team ??</h3>
                <h4>Please Give your Info here....</h4>
                <Container>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                    <Button variant="primary" >
                        Submit
                    </Button>
                </Form>
            </Container>
  
            </div>
        </div>
    );
};

export default About;