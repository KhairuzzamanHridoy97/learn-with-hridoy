import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const[blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('./blogs.JSON')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            <h1 className='welcome-blog'>Welcome To My Blog Section</h1>
            <div>
            <Container>
             <Row xs={1} md={2} direction="horizontal" gap={3} className="g-3">

            {
                blogs.map(blog=> <Blog blog={blog}></Blog> )
            }
             </Row>
             </Container>
            </div>
        </div>
    );
};

export default Blogs;