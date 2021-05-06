import React, {Component} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import SpeciesData from '../../speciesdata.json';
import classes from './Accordion.module.css';
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
let chattaPics = [Barbours_Map_Turtle, Mussels];
let flintPics = [Barbours_Map_Turtle, Shoal_Bass, Mussels];
let apaBayPics = [Oysters];
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
                                <div >
                                <Card.Body style={{ backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${apaPics[i]})` }} className={classes.body}>{SpeciesData.apa[i].info}</Card.Body>
                                </div>
                            </Accordion.Collapse>
                                </Card> 
                        </Accordion>);     
                            
            }
        }
            if(this.props.animalList == SpeciesData.chatta){
                for(let i = 0; i < SpeciesData.chatta.length; i++){
                    acord.push(
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1" className={classes.header}>
                                    {SpeciesData.chatta[i].name}
                                </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <div >
                                <Card.Body style={{ backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${chattaPics[i]})` }} className={classes.body}>{SpeciesData.chatta[i].info}</Card.Body>
                                </div>
                            </Accordion.Collapse>
                                </Card> 
                        </Accordion>);     
                            
            }
        }
        if(this.props.animalList == SpeciesData.flint){
                for(let i = 0; i < SpeciesData.flint.length; i++){
                    acord.push(
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1" className={classes.header}>
                                    {SpeciesData.flint[i].name}
                                </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <div >
                                <Card.Body style={{ backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${flintPics[i]})` }} className={classes.body}>{SpeciesData.flint[i].info}</Card.Body>
                                </div>
                            </Accordion.Collapse>
                                </Card> 
                        </Accordion>);     
                            
            }
        }
        if(this.props.animalList == SpeciesData.apaBay){
                for(let i = 0; i < SpeciesData.apaBay.length; i++){
                    acord.push(
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1" className={classes.header}>
                                    {SpeciesData.apaBay[i].name}
                                </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <div >
                                <Card.Body style={{ backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${apaBayPics[i]})` }} className={classes.body}>{SpeciesData.apaBay[i].info}</Card.Body>
                                </div>
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