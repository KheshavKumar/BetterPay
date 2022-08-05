import React from 'react'
import {Link} from 'react-router-dom'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components'
import './Footer.css'
import logopic from '../assets/sociallogo.png'

const footer = () => {
  return (
   <div className = "main-footer">
   <div className = "container">
   {/* <div classNAme = "row"> */}
   <Stack direction="horizontal" gap={3}>
    {/*column 1*/}
    <div className = "column1">
      <h4 className = "column1h">We're on a mission to</h4>
      <p>help our customers succeed by <br></br>bringing ingenuinty, simplicty, and <br></br> humanity to banking. We were founded on the belief that the banking industry would be revolutionized by information and technology, beginning with loans.</p>
    </div>
    <div className = "column2">
      <h4 className = "column2h">Capital One Sofware Engineering Summit 2022</h4>
      <p>Dharmik Patel, Manjot Kaur, Mohamed Adam, Kheshav Kumar, Anish Suresh, and Dhruv Kaushal</p>
      <br></br>
      <img src = {logopic} width = "750"></img>
    </div>
    </Stack>
   {/* </div> */}
    <div className = "footer-bottom">
      
    </div>
    </div>
    <p className = "copyright">
        &copy;{new Date().getFullYear} BetterPay Website - All Rights Reservered
      </p>
   </div>
  );
}

export default footer

