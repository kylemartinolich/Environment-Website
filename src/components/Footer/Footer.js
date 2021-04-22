import React from 'react';
import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from './Footer.module.css';
const footer = (props) => (
    <div className={classes.Footer}>
        <h2><strong>Find out more!</strong></h2>
{/*       <Form className="justify-content-center">
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
</Form> */}

<Form>
  <Form.Row className="justify-content-md-center">
    <Col sm={2}>
      <Form.Control placeholder="First name" />
    </Col>
    <Col sm={2}>
      <Form.Control placeholder="Last name" />
    </Col>
    <Col sm={4}>
        <Form.Control type="email" placeholder="Enter email" />
    </Col>
    <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Row>
</Form>
<span>
    © 2021 
</span>
    </div>
);

export default footer;