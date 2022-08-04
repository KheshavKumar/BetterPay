
import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

import logo from '../assets/icon.svg'
import './Header.css'


const Header = () => {
  return (
    <div>
        <Stack className="navBar" direction="horizontal" gap={3}>
          <img className="logo" src={logo} alt="Logo" />
          <h1 className="title">BetterPay</h1>
          <div className='pageItemHolder ms-auto'>
            <Link className="pageItem" to="/">HOME</Link>
            <Link className="pageItem" to="/dashboard">DASHBOARD</Link>
          </div>


          <Card className="welcomeHolder">
          <Card.Body className="welcome">Welcome Dharmik!</Card.Body>
          </Card>
        </Stack>


        

    </div>
  );
};

export default Header;
