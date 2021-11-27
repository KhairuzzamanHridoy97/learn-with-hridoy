import React from 'react';
import Posts from '../Posts/Posts';


const Home = () => {
    const homeHeaderStyle = {
        padding:'20px'
    }
    return (
        <div>            
            <h1 style={homeHeaderStyle}>Explore My Popular Services</h1>
            <Posts></Posts>
        </div>
    );
};

export default Home;