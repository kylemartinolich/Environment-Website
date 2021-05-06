import React from 'react';
import classes from './AnimalButton.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const animalButton = (props) => (<div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.animal}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className={classes.p}>
          {props.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
    
);
export default animalButton;