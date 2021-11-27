import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Post from '../Post/Post';


const Posts = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch('./post.JSON')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div className='post-container'>
            <Container>
             <Row xs={1} md={4} direction="horizontal" gap={3} className="g-3">

            {
                posts.map(post=>
                  <Post post={post}></Post>  
                    )
            }
           
             </Row>

            </Container>

        </div>
    );
};

export default Posts;



