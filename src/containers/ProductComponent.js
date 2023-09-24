import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ProductComponent() {

  const products = useSelector((state) => state.allProducts.products)

  const renderList = products.map((product) => {
    const { id, title, price, description, category, image } = product
    return (


      <div key={id}>
        <Row>
          <Col sm={12} md={6} lg={4} xl={3}>

            <Link to={`/product/${id}`}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    {description}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{category}</ListGroup.Item>
                  <ListGroup.Item>{price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>


      </div>
    )
  })

  return (
    <Row>
      <Col sm={12} md={6} lg={4} xl={3}>
        <div>{renderList}</div>
      </Col>
    </Row>
  )


}

export default ProductComponent
