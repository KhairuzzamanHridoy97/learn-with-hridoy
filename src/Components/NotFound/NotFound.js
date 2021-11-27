import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const notFoundStyle={
        color:"red",
        font:"50px",
        padding:"182px"
    }
    return (
        <div style={notFoundStyle}>
            <h2>Page Not Found</h2>
            <p>Please Enter The Correct URL!!</p>
            <Link to='/home'>
            <button className="btn btn-primary">Home Page </button>

            </Link>
        </div>
    );
};

export default NotFound;