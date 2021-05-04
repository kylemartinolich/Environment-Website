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
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-info-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-facebook" viewBox="0 0 16 16">
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