import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
const footer = (props) => (
    <div>
        <h2><strong>Lorem Ipsum</strong></h2>
        <Form className="justify-content-center">
    <Row>
        <Col sm={2}>
      <Form.Control placeholder="First name" />
    </Col>
    <Col sm={3}>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
  <br/>
  <Row><Col sm={5}>

    <Form.Control type="email" placeholder="Enter email" />

  </Col></Row>
</Form>

    </div>
);

export default footer;