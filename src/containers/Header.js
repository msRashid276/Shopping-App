import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Header() {
  return (
    <div style={{backgroundColor:"aliceblue"}}>
      <Row>
        <Col className='d-flex justify-content-start'>
          <i class="fa fa-shopping-cart fa-3x" style={{color:"darkblue"}} aria-hidden="true"></i>
          <h1 style={{color:"darkblue"}}>Shopping App</h1>
        </Col>
        <Col>

        </Col>
      </Row>

    </div>
  )
}

export default Header
