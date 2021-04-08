import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from './components/Button/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import classes from './ApalaPage.module.css';
import AccordionPage from '../../components/Accordion/Accordion';
import SpeciesData from '../../speciesdata.json';
import AnimalButton from '../../components/AnimalButton/AnimalButton';
import Plus from '../../assets/Miscellaneous/plus.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import apapic from '../../assets/Rivers/Apalachicola_River.png';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
     Apalachicola River, Georgia © Ebyabe
  </Tooltip>
);
class ApalaPage extends Component{
    state={
        modalShow: false
    }

    showModalHandler = (handle)=>{
        this.setState({showModal: !this.state.showModal});
        console.log("Test");
    }
    render(){
        return(
        <div>
            <img src={apapic} className={classes.showcase} />
            <div className={classes.accord}>
            <AccordionPage animalList={SpeciesData.apa}/>
            </div>
            <div className={classes.chevronContainer}><i onClick={() =>window.scrollTo(100,1000)}className={classes.chevron}></i></div>
            <div className={classes.text}>
            <div className={classes.info}>
            <h2>Welcome to the Apalachicola!</h2>
            <p>
                The Apalachicola River basin is a geographic area in the Florida Panhandle that drains a watershed of some 
                20,000 square miles and it is one of the nations most important biological hotspots. The headwaters of the 
                Apalachicola are the Chattahoochee River flowing from Georgia’s southern Appalachians, and the Flint River, 
                which begins south of Atlanta. Beginning at the confluence of these rivers, the Apalachicola River flows for 
                107 miles south to Apalachicola Bay. It rolls past 150-foot tall bluffs, etched with deep steephead ravines, 
                and the state’s largest floodplain forest – great habitat for all kinds of animals.
                </p>
                <br/>
                <p>
                The Apalachicola River basin has the highest density of amphibian (44) and reptile (64) species north of Mexico. 
                The river and its floodplain are also home to more than 1,000 species of plants, 52 species of mammals, 60 
                species of snails and clams, five federally listed mussels, 315 bird species, and 86 species of fish. 
                </p>
                <br/>
                <p>
                Historically, Apalachicola Bay produced 90 percent of Florida’s oysters and 13 percent of the nation’s harvest. 
                It was known for its outstanding commercial fishing, shrimping and crabbing. Unfortunately the bay’s productively 
                declined as the river was manipulated over the years.
                </p>
                <br/>
                <p>
                In 2010 this outstanding fishery collapsed due to little freshwater flowing into the estuary and over-harvesting 
                in response to the Deepwater Horizon oil spill. The bay’s oyster populations have plummeted, and some of its underwater 
                plants have disappeared as a result which has impacted many of the bay’s other species. The bay needs thriving oyster 
                reefs and aquatic vegetation to provide cover and breeding ground for mussels, crabs, snails, shrimp and fish.
            </p>
            </div>
            <br></br>
            <AnimalButton show={this.state.modalShow} onHide={() => this.setState({modalShow:false})} />
            </div>
</div>);
    }
}
export default ApalaPage;
/*
<Jumbotron>
  <h1>Hello, Apalachacola!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
*/

/*
        <header className={classes.showcase}>
                <div className={classes.showcasecontent}>
                    <img  className={classes.plusButton} style={{top: '520px', right: '230px'}} onClick={() => this.setState({modalShow:true})} src={Plus} alt="Plus Button"></img>
                    <img  className={classes.plusButton} style={{top: '120px', left: '230px'}} onClick={() => this.setState({modalShow:true})} src={Plus} alt="Plus Button"></img>
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