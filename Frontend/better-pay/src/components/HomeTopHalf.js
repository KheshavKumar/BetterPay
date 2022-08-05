import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './HomeTopHalf.css'
import image from '../assets/homePageTopHalfImage.png'

const HomeTopHalf = () => {
  return (
    <div >
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <img className='image' src={image} width="100%" alt="Logo" />
                </Col>
                <Col md="auto" className='leftSideHOLDER'>
                <div className='leftSideHolder'>
                        <p className='titleTopHalf'>Loan and request money<br></br>from friends. <br></br>No wait. No Paperwork.</p>
                        <p className='subtitle'>Making Banking More Human</p>
                        <Link className='buttonHolderLink'to="/dashboard">
                            <Button className='button' variant="primary" >
                                Dashboard →
                            </Button>{''}
                        </Link>
                    </div>  
                </Col>
            </Row>
        </Container> 
     
    </div>
  )
}

export default HomeTopHalf