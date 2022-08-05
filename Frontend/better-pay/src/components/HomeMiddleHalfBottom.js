import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import customerImage1 from '../assets/customer1.png';
import customerImage2 from '../assets/customer2.png';
import customerImage3 from '../assets/customer3.png';
import customerImage4 from '../assets/customer4.png';
import darkGradient from '../assets/Shape.png';


import './HomeMiddleHalfBottom.css'
const HomeMiddleHalfBottom = () => {
    return (
        <div>
            
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <Card border="light" className="text-white" style={{ width: '25rem' }}>
                            <Card.Img src={customerImage1} alt="Card image" />
                            <Card.ImgOverlay className='custImageOverlayHolder'>
                                <Card.Title className='custImageOverlayHolderTitle'>Linda Lawrence</Card.Title>
                                <Card.Text className='custImageOverlayHolderSubTilte'>"My experience has been very seamless"</Card.Text>
                            </Card.ImgOverlay>
                        </Card>                </Col>
                    <Col md="auto" className='leftSideHOLDER'>
                        <div className='leftSideHolder'>
                            <p className='titleTopHalf'>What our customers <br></br>are saying</p>
                            <div className='smallCustHolder'>
                                <Card border="light" className="text-white" style={{ width: '15rem' }}>
                                    <Card.Img src={customerImage2} alt="Card image" />
                                    <Card.ImgOverlay className='custImageOverlayHolder'>
                                        <Card.Title className='custImageOverlayHolderTitle'>Timothy Vargas</Card.Title>
                                        <Card.Text className='custImageOverlayHolderSubTilte'>User from 2022</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                                <Card border="light" className="text-white" style={{ width: '15rem' }}>
                                    <Card.Img src={customerImage3} alt="Card image" />
                                    <Card.ImgOverlay className='custImageOverlayHolder'>
                                        <Card.Title className='custImageOverlayHolderTitle' >Sandra Hughes</Card.Title>
                                        <Card.Text className='custImageOverlayHolderSubTilte'>User from 2022</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                                <Card border="light" className="text-white" style={{ width: '15rem' }}>
                                    <Card.Img src={customerImage4} alt="Card image" />
                                    <Card.ImgOverlay className='custImageOverlayHolder'>
                                        <Card.Title className='custImageOverlayHolderTitle'>Zachary Taylor</Card.Title>
                                        <Card.Text className='custImageOverlayHolderSubTilte'>User from 2022</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default HomeMiddleHalfBottom