import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './LowerChattaPage.module.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';


const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
     Columbus, Georgia skyline © Thechased
  </Tooltip>
);

class LowerChattaPage extends Component{

    render(){
        return(

        <div>
                    <div>
            <jumbotron fluid>
                
            </jumbotron>
        </div>
            <header className={classes.showcase}>
                <div className={classes.showcasecontent}>
                    <div className={classes.container}>
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
            <div className={classes.text}>
            <div className={classes.info}>
                        <Row>
                            <Col md="auto"><h2 className = {classes.h2}>Welcome to the Water Wars!</h2></Col>
            <Col></Col>
                        </Row>
                        <Row>
                            <Col md="8">
                        <p className={classes.pL}>
                The ACF originates northeast of Lake Lanier and cuts across southwest Georgia farmland, 
                flowing along the Alabama border into the Gulf of Mexico through Florida’s Panhandle.
            </p>
            </Col>
                        <Col></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col></Col>
                            <Col md="8">
                        <p className={classes.pR}>
                The basin serves as the main source of drinking water to more than 4 million people in
                metro Atlanta, including roughly 70%. of the region’s population. It also supports a 
                broad swath of industries, including agriculture, power generation, manufacturing, 
                commercial fishing and recreation.
            </p>
            </Col>
                        </Row>
            <br/>
               <div fluid className={classes.imgbreak}> <Row>
    <Col></Col>
  </Row></div>
            <div className={classes.states}>
                <Row>
                            <Col  className={classes.heading} md="8">
                 <span className={classes.titles}>Georgia</span> </Col>
                 <Col></Col>
                        </Row> 
                <br/><br/>
            <Row>
                            <Col></Col>
                            <Col md="10">
                        <p className={classes.pR}>
                As the upstream user, Georgia wants to have enough water to continue growing, 
                particularly in booming metro Atlanta where much of these river systems originate, in addition 
                to supplying cities such as Columbus and heavy agricultural usage in the state’s southwest corner. 
                The problem is that Atlanta is not located in a water-rich area of the state, and it sprawls across 
                the tops of multiple river systems that drain into both the Atlantic Ocean and Gulf of Mexico.
            </p>
            <br/>
             </Col>
                        </Row>
                <br/>
                <Row>
                    <Col></Col>
                            <Col  className={classes.heading} md="8">
                 <span className={classes.titles}>Alabama</span>  </Col>
                 </Row>
                <br/><br/>
                <Row>
                            <Col md="10">
                        <p className={classes.pL}>
                Alabama is concerned that Atlanta’s ever-increasing thirst for water will severely limit its own 
                use of water for power generation, municipal supply, fisheries and other current and future needs.
            </p>
            </Col>
            <Col></Col>
            </Row>            
            <br/>
            <br/>
                 <Row>
                            <Col  className={classes.heading} md="8">
                 <span className={classes.titles}>Florida</span> </Col>
                 <Col></Col>
                        </Row>  
                <br/><br/>
                 <Row>
                     <Col></Col>
                            <Col md="10">
                        <p className={classes.pR}>
                Florida wants enough freshwater to reach the Apalachicola Bay to sustain its multi-million dollar 
                shellfish industry, which is under severe ecological stress resulting from low river flows and 
                saltwater intrusion.
                </p>
                </Col>
                </Row>
            </div>
            <div fluid className={classes.imgbreak}> <Row>
    <Col></Col>
  </Row></div>
            <br></br>
            <Row>
                            <Col md="10">
                        <p className={classes.pL}>
                In the mid-1900s, the U.S. Army Corps of Engineers built Buford Dam on the Chattahoochee River, 
                creating Lake Lanier. The authorized purpose of the lake was to provide flood control, hydropower 
                and navigation. Lake Allatoona, a Corps lake on the Etowah River northwest of Atlanta (ACT basin), 
                was authorized for similar purposes.
            </p>
            <br/>
            <p className={classes.pL}>
                The booming population of metro Atlanta began to rely on Lakes Lanier and Allatoona for its water 
                supply, and the Corps began issuing contracts to municipal water-supply providers without any 
                evaluation under the National Environmental Policy Act (NEPA). In 1989, the Corps recommended 
                that some of the lakes’ water be reallocated for water supply in the Atlanta region.
            </p>
            <br/>
            <p className={classes.pL}>
                In response, Alabama sued the Corps, claiming that reallocating the water in Lake Allatoona would 
                favor Georgia's interests and that the Corps had violated NEPA by ignoring the environmental impacts 
                on the downstream states. Alabama also claimed that the Corps breached its duty to operate Lake Lanier 
                and other federal reservoirs for the benefit of all downstream users in the ACF and ACT basins. 
                Florida intervened on the side of Alabama, while Georgia and metro-Atlanta municipalities either 
                intervened or initiated their own lawsuits claiming that the Corps was not doing its part to allow 
                the lakes to be used for current and future water supply.
            </p>
            </Col>
            <Col></Col>
            </Row>      
            <br/>
            <p className={classes.important}>
                Georgia, Florida and Alabama have been fighting over water in the ACF for more than three decades.
            </p>
            <br/>
            <Row>
                     <Col></Col>
                            <Col md="10">
                        <p className={classes.pR}>
                Florida sued Georgia over its behavior during a multi-year drought, which Florida alleges led to the 
                ecological collapse of the Apalachicola Bay in 2013 and its iconic oyster industry, which once 
                produced 10% of the country’s oysters. The mollusks rely on a delicate balance of freshwater from 
                the ACF and saltwater from the Gulf of Mexico to survive. When freshwater flows from the ACF decreased, 
                the bay’s salinity increased, which allowed oysters’ predators to thrive and disease bacteria to proliferate.
            </p>
            <br/>
            <p className={classes.pR}>
               Florida blames Georgia for the using up too much water upstream, particularly farmers in southwest Georgia. 
            </p>
            <br/>
            <p className={classes.pR}>
                Florida is asking the Supreme Court to impose water usage limits on Georgia, particularly during drought 
                years, so more freshwater from the ACF can flow to Apalachicola.
            </p>
             </Col>
                </Row>
            <br/>
            <div className={classes.states}>
                <br/>
                 <Row>
                            <Col  className={classes.heading} md="12">
                 <span className={classes.titles}>Update</span> </Col>
                 <Col></Col>
                        </Row>   
                <br/><br/>
                <p className={classes.pC}>
                Florida wants enough freshwater to reach the Apalachicola Bay to sustain its multi-million dollar 
                shellfish industry, which is under severe ecological stress resulting from low river flows and 
                saltwater intrusion.
            </p>
            </div>
            </div>
            <br></br>
            
            </div>
            
        </div>);
    }
}
export default LowerChattaPage;