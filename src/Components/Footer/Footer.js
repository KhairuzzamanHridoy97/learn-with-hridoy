import React from 'react';

const Footer = () => {
    const footerStyle={
        borderTop:"3px solid lightgray",
        backgroundColor:'black',
        color:"white",
        padding:"15px",
        marginTop:"10px"
    }
    return (
        <div style={footerStyle}>
            <h5><i> Copyright © 2021 Learn With Hridoy. All Rights Reserved </i></h5>
        </div>
    );
};

export default Footer;