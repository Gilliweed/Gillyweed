import React from 'react';
import { Stack, Button, Col, Row, Card } from 'react-bootstrap';
import Icon from '@mui/icons-material/Category';
import { NavLink } from 'react-router-dom';
const Categories = () => {
  return (
    <Card
      className=" border-0"
      // border="success"
      style={{ backgroundColor: '' }}
    >
      <Card.Header className="border-0" style={{ backgroundColor: 'white' }}>
        <h2>
          <Icon style={{ fontSize: '35px' }} />
          Top Brands
        </h2>
      </Card.Header>
      <Row>
        <Col>
          <Stack gap={4} className="col-md" style={{ marginTop: '24px' }}>
            <Button variant="outline-warning">Brand 1</Button>
            <Button variant="outline-warning">Brand 2</Button>
            <Button variant="outline-warning">Brand 3</Button>
            {/* <Button variant="secondary">Brand 4</Button>
                        <Button variant="secondary">Brand 5</Button> */}
          </Stack>
        </Col>

        <Col>
          <Stack gap={4} className="col-md" style={{ marginTop: '24px' }}>
            <Button variant="outline-warning">Brand 1</Button>
            <Button variant="outline-warning">Brand 2</Button>
            <Button variant="outline-warning">Brand 3</Button>
            {/* <Button variant="secondary">Brand 4</Button>
                        <Button variant="secondary">Brand 5</Button> */}
          </Stack>
        </Col>
        <Col>
          <Stack gap={4} className="col-md" style={{ marginTop: '24px' }}>
            <Button variant="outline-warning">Brand 1</Button>
            <Button variant="outline-warning">Brand 2</Button>
            <Button variant="outline-warning">Brand 3</Button>
            {/* <Button variant="secondary">Brand 4</Button>
                        <Button variant="secondary">Brand 5</Button> */}
          </Stack>
        </Col>
        <Col>
          <Stack gap={4} className="col-md" style={{ marginTop: '24px' }}>
            <Button variant="outline-warning">Brand 1</Button>
            <Button variant="outline-warning">Brand 2</Button>
            <Button variant="outline-warning">Brand 3</Button>
            {/* <Button variant="secondary">Brand 4</Button>
                        <Button variant="secondary">Brand 5</Button> */}
          </Stack>
        </Col>
      </Row>
      {/* <Card.Header
        className="border-0 text-right"
        style={{ backgroundColor: 'white' }}
      >
        <Card.Link className="text-right" href="#">
          <NavLink to="/moreProducts" exact style={{ color: "black" }}>More</NavLink>
          </Card.Link>
      </Card.Header> */}
    </Card>
  );
};
export default Categories;