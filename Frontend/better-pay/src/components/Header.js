
import React from 'react'
import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack';
import logo from '../assets/icon.svg'
import './Header.css'

const Header = () => {
  return (
    <div>
        <Stack direction="horizontal" gap={4}>
          <img className="logo" src={logo} alt="Logo" />
          <h1 className="title">BetterPayHeader</h1>
          <Link className="ms-auto" to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </Stack>


        

    </div>
  );
};

export default Header;
