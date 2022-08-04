
import React from 'react'
import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack';

const Header = () => {
  return (
    <div>
        <Stack direction="horizontal" gap={4}>
          <p>logo</p>
          <h1>BetterPay</h1>
          <Link className="ms-auto" to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </Stack>


        

    </div>
  )
}

export default Header
