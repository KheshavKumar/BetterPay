import React from 'react'
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import image1 from '../assets/articleImage1.png'
import image2 from '../assets/articleImage2.png'
import image3 from '../assets/articleImage3.png'
import image4 from '../assets/articleImage4.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomeMiddleHalfTop.css'
const HomeMiddleHalfTop = () => {
  return (
    <div className="holderEverthing">

        <div className='topHalfHolder'>
        <Stack className="" direction="horizontal" gap={3}>
                <p className='title1'>More about finance & loans</p>
            <p className='subtitle1 ms-auto'>See All Articles →</p>
        
        </Stack>
        </div>
        <div className='bottomHalfHolder'>
        <Card border="light" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
            <Card.Title className="cardTitle">Credit rating as a private customer</Card.Title>
            <Card.Text className="cardDate">
                <br></br>February 25, 2021
            </Card.Text>
            </Card.Body>
        </Card>
        <Card border="light" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
            <Card.Title className="cardTitle">Get hold of your private loans with a promissory</Card.Title>
            <Card.Text className="cardDate">
                <br></br>February 25, 2021
            </Card.Text>
            </Card.Body>
        </Card>
        <Card border="light" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
            <Card.Title className="cardTitle">What is APR and what can you actually use it?</Card.Title>
            <Card.Text className="cardDate">
                <br></br>February 25, 2021
            </Card.Text>
            </Card.Body>
        </Card>
        <Card border="light" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image4} />
            <Card.Body>
            <Card.Title className="cardTitle">Superfast loans for your dream home</Card.Title>
            <Card.Text className="cardDate">
                <br></br>February 25, 2021
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default HomeMiddleHalfTop