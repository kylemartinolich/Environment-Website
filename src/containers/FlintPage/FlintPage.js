import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from './components/Button/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import classes from './FlintPage.module.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import AccordionPage from '../../components/Accordion/Accordion';
import SpeciesData from '../../speciesdata.json';
import flintpic from '../../assets/Rivers/Flint_River.png';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
     Bridge over Flint River, Georgia © Michael Rivera
  </Tooltip>
);

class FlintPage extends Component{

    render(){
        return(
        <div>
            <img src={flintpic} className={classes.showcase} />
            <div className={classes.accord}>
            <AccordionPage animalList={SpeciesData.flint}/>
            </div>
            <div className={classes.text}>
            <h2>Welcome to the Flint!</h2>
            <p>
               The Flint River, which is contained entirely within the state of Georgia,
                originates on the southern edge of the Atlanta metropolitan area under
                the Hartsfield-Jackson Atlanta International Airport, in Clayton County,
                and flows southerly in a wide eastward arc to Decatur County in southwest
                Georgia, before flowing into Lake Seminole. 
            </p>
            <br/>
            <p>
                The Flint River first sees the light of day at the mouth of a concrete 
                culvert on the south side of Virginia Avenue in Hapeville, just north of
                Hartsfield Atlanta International Airport.
            </p>
            <br/>
            <p>
                The length of the main stem of the Flint River is 349 river miles, and it
                drains an area of 8,460 square miles. The Flint River flows unimpeded for
                nearly 220 river miles, which makes it one of only 40 rivers in the U.S.
                that flow more than 200 river miles unimpeded.
            </p>
            <br/>
            <p>
                The lower part of the Flint River Basin, together with the upper part of
                the Apalachicola Basin, has the highest species density of amphibians and
                reptiles on the continent, north of Mexico.
            </p>
            <br/>
            <p>
                A new species of fish, called the Halloween Darter, is found only in the
                Flint, Chattahoochee and Apalachicola Rivers. The Halloween Darter, or
                Percina crypta, is a small fish that requires a habitat of swiftly
                flowing water over rocky shoals. The Shoal bass, a species of freshwater
                fish in the sunfish family, is considered the signature species of the
                Flint River. 
            </p>

            <br></br>
            </div>
</div>);
    }
}
export default FlintPage;
/*
<Jumbotron>
  <h1>Hello, flint!</h1>
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