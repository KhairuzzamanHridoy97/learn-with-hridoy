import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from '../Service/Service';
import './Services.css'
import { Container, Row } from 'react-bootstrap';


const Services = () => {
    // State 
    const[services,setServices] = useState([])
    useEffect(()=>{
        fetch('./service.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className='welcome-course'>Welcome To My Course Section</h1>
            
            <div>
                <Container>
                 <Row xs={1} md={3} direction="horizontal" gap={3} className="g-3">

                    {
                        services.map(service=> <Service 
                        service={service}
                        ></Service>)
                    }
                    </Row>

                </Container>

            </div>
        </div>
    );
};

export default Services;