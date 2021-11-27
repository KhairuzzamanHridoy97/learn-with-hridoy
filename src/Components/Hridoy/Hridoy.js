import React from 'react';
import hridoy from '../../images/hridoy_removebg.png'

const Hridoy = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <img src={hridoy} alt="" />
                </div>
                <div className="col mt-3">
                    <h3>Learn Programming Language & Any Modern Skills for Future From Here.</h3> 
                    <br />
                    <h5>
                    Every courses are free in our catalog, you always get the latest tech free from this site. Examples are available with these tutorials
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Hridoy;