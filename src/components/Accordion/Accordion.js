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

let apaPics = [Eastern_Indigo_Snake, Red_Cockaded_Woodpecker, Florida_Black_Bear, Dusky_Salamander, Torreya_Tree, Fat_Threeridge_Mussel, Gulf_Sturgeon, Oysters];
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
                                <Card.Body style={{ backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${apaPics[i]})` }} className={classes.body}>{SpeciesData.apa[i].info}</Card.Body>
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