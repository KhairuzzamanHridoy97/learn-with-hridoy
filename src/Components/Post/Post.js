import React from 'react';
import { Card} from 'react-bootstrap';

const Post = (props) => {
    const{img,title,description} = props.post
    return (
        <div>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text> {description}
                        </Card.Text>
                        </Card.Body>
                    </Card>                   
        </div>
    );
};

export default Post;

{/* <img src={img} alt="" />
<h3>{title}</h3>
<p>{description}</p> */}












    // <Col>
    //   <Card>
    //     <Card.Img variant="top" src={img} thumbnail/>
    //     <Card.Body>
    //       <Card.Title>{title}</Card.Title>
    //       <Card.Text>
    //         {description}
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    // </Col>



