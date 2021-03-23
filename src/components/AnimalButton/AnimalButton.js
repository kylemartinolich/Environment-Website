import React from 'react';
import classes from './AnimalButton.module.css';
import Plus from '../../assets/Miscellaneous/plus.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
var modal;
const animalButton = (props) => (
    props.setShowModal == true ? modal = ( <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.showMyModal}>Close</Button>
      </Modal.Footer>
    </Modal> ): null,
    <div onClick={() => props.setShowModal(true)}onHide={() => props.setShowModal(false)}>
        {modal}
        <img  className={classes.plusButton}   src={Plus} alt="Plus Button"></img>
    </div>
    
);

export default animalButton;

//<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>