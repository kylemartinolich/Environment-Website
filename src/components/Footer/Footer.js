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
<svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 60 55" preserveAspectRatio="xMidYMin slice" fill="black" width="100%"
    height="1px" padding-bottom="92%" overflow="visible">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" class="bi bi-facebook" viewBox="0 0 50 50">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
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