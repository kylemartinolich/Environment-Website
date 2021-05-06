import React from 'react';
import classes from './AnimalButton.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SpeciesData from '../../speciesdata.json';
import Image from 'react-bootstrap/Image';
import Eastern_Indigo_Snake from '../../assets/Species/Eastern_Indigo_Snake.jpg';
import Red_Cockaded_Woodpecker from '../../assets/Species/Red_cockaded_woodpecker.jpg';
import Florida_Black_Bear from '../../assets/Species/A_Florida_Black_Bear.jpg';
import Dusky_Salamander from '../../assets/Species/salamander.jpeg';
import Torreya_Tree from '../../assets/Species/Torreya_taxifolia_foliage.jpg';
import Fat_Threeridge_Mussel from '../../assets/Species/Fat_Threeridge_Mussel.jpg';
import Gulf_Sturgeon from '../../assets/Species/sturgeon.jpg';
import Oysters from '../../assets/Species/Crassostrea_virginica.jpg';
import Barbours_Map_Turtle from '../../assets/Species/Barbours_Map_Turtle_kame.jpg';
import Mussels from '../../assets/Species/mussels.png';
import Shoal_Bass from '../../assets/Species/Shoal_Bass.png';
let apaPics = [Eastern_Indigo_Snake, Red_Cockaded_Woodpecker, Florida_Black_Bear, Dusky_Salamander, Torreya_Tree, Fat_Threeridge_Mussel, Gulf_Sturgeon, Oysters];
const animalButton = (props) => (<div>
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
            <Row>
                <Col>
                    <p>
                        {props.description}
                    </p>
                </Col>
                <Col>
                    <Image src={apaPics[props.piclink]} rounded />
                </Col>
            </Row>
      </Modal.Body>
      <Modal.Footer className={classes.border}>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
    
);
export default animalButton;