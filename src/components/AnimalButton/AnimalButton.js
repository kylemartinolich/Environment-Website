import React from 'react';
import classes from './AnimalButton.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const animalButton = (props) => (
    <div>
        <Modal className={classes.text}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className={classes.heading} closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.animal}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={classes.p}>
                {props.description}
            </Modal.Body>
            <Modal.Footer className={classes.border}>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    </div>

);
export default animalButton;