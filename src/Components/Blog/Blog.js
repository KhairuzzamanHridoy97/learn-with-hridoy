import React from 'react';
import { Card ,Button} from 'react-bootstrap';

const Blog = (props) => {
    const {heading,intro} = props.blog
    return (
        <div>
                <Card>
                    <Card.Body>
                    <Card.Title>{heading}</Card.Title>
                    <Card.Text> {intro}
                    </Card.Text>
                    <Button variant="outline-dark">Read More </Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Blog;
