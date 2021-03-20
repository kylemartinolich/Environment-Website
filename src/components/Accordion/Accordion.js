import React, {Component} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import SpeciesData from '../../speciesdata.json';
import classes from './Accordion.module.css';

let acord = [];


class AccordionPage extends Component{
    render(){
        acord = [];
            if(this.props.animalList == SpeciesData.apa){
                for(let i = 0; i < SpeciesData.apa.length; i++){
                    acord.push(
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1" className={classes.header}>
                                    {SpeciesData.apa[i].name}
                                </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className={classes.body}>{SpeciesData.apa[i].info}</Card.Body>
                            </Accordion.Collapse>
                                </Card> 
                        </Accordion>);     
                            
            }
        }
                return(
                    <div>
                    {acord}   
                    </div>
                    )
            
                }
            
        }
        export default AccordionPage;