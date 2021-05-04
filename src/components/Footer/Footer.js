import React from 'react';
import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import Toast from 'react-bootstrap/Toast';
import classes from './Footer.module.css';
import fbicon from '../../assets/Miscellaneous/fbicon.png';
import Image from 'react-bootstrap/Image';

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

<Form onSubmit={sendEmail}>
  <Form.Row className="justify-content-md-center">
    <Col sm={2}>
      <Form.Control placeholder="First name" name="first_name" />
    </Col>
    <Col sm={2}>
      <Form.Control placeholder="Last name" name="last_name" />
    </Col>
    <Col sm={4}>
        <Form.Control type="email" placeholder="Enter email" name="email" />
    </Col>
    <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Row>
</Form>
<div>
<svg aria-hidden="true" data-prefix="fab" fill="black" data-icon="facebook-f" width="16" height="16"
    class="svg-inline--fa fa-facebook-f fa-w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
</svg>
</div>
<span>
    © 2021 
</span>
    </div>
);

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_g5wg4n6', 'template_o3itg1m', e.target, 'user_y0y03N8lgIFynSKHRp1s5')
      .then((result) => {
          console.log(result.text);
          alert("Email sent!");
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong " + error.text);
      });
      e.target.reset()
  }

export default footer;