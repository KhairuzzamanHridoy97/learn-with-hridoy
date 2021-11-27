import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const Service = (props) => {
    const{img,subject,details} = props.service
    return (
        <div className="service">
            
                
                    <Card>
                        <Card.Img variant="top" src={img} fluid />
                        <Card.Body>
                        <Card.Title>{subject}</Card.Title>
                        <Card.Text> {details}
                        </Card.Text>
                        <Button> Start Learning </Button>
                        </Card.Body>
                    </Card>
                    
        </div>
    );
};

export default Service;



