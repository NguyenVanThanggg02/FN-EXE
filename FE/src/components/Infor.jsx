import React from 'react';
import { Container } from 'react-bootstrap';
import banner from "../assets/images/banner.jpg";

const Infor = () => {
    return (
        <Container fluid className='p-0'>
            <img src={banner} style={{width:'100%', maxHeight:'600px'}}>
            </img>
        </Container>
    );
};

export default Infor;