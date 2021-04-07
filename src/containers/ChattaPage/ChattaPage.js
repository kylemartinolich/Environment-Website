import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from './components/Button/Button';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import classes from './ChattaPage.module.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import AccordionPage from '../../components/Accordion/Accordion';
import SpeciesData from '../../speciesdata.json';
import chattapic from '../../assets/Rivers/UpperChatta.jpg';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
     Walton on Chattahoochee, Georgia © Thomson200
  </Tooltip>
);

class ChattaPage extends Component{

    render(){
        return(
        <div>
            <img src={chattapic} className={classes.showcase} />
            <div className={classes.accord}>
            <AccordionPage animalList={SpeciesData.chatta}/>
            </div>
            <div className={classes.text}>
            <h2>Welcome to the Chattahoochee!</h2>
            <p>
                The Chattahoochee River begins its journey south on the southern edge of the Blue Ridge mountains,
                just below Brasstown Bald, Georgia’s highest point at 4,784 feet.  The word Chattahoochee is derived
                from the Creek Indian words meaning painted rock.  From its birthplace at Coon Den Ridge in Union
                County, Georgia, the river flows south for 430 miles to its confluence with the Flint River.
                The Chattahoochee basin drains an area of 8,770 square miles and is the most heavily used
                water resource in Georgia.
            </p>
            <br/>
            <p>
                The Chattahoochee River Basin is inhabited by about 24 species of freshwater aquatic turtles,
                about 37 species of salamanders and sirens, about 30 species of frogs and toads, and the American
                alligator. The river is home to 9 state threatened or endangered plant species.
            </p>
            <br/>
            <p>
                The Chattahoochee River is the second southern-most trout habitat in the United States 
                (other: Guadalupe River, Texas) and is also one of only two trout streams in North America 
                that flow through a major urban area (other: Bow River, Canada).
            </p>
            <br></br>
            </div>
        </div>);
    }
}
export default ChattaPage;
/*<Jumbotron>
            <h1>Hello, Upper Chattahoochee!</h1>
            <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
            </Jumbotron>*/
            
/*
 <header className={classes.showcase}>
                <div className={classes.showcasecontent}>
                    <div className={classes.container}>
                        <div className={classes.chevronContainer}><i onClick={() =>window.scrollTo(100,1000)}className={classes.chevron}></i></div>
                    </div>

                </div>

                <div class="position-absolute bottom-0 left-0">
                    <OverlayTrigger
                        placement="right"
                            delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                                >
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-info-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>
                                                                  
                    </OverlayTrigger>
                </div>
            </header>
*/