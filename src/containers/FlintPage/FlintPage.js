import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './FlintPage.module.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import AccordionPage from '../../components/Accordion/Accordion';
import AnimalButton from '../../components/AnimalButton/AnimalButton';
import SpeciesData from '../../speciesdata.json';
import flintpic from '../../assets/Rivers/flint.jpg';
import ImageMapper from 'react-image-mapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
     Bridge over Flint River, Georgia © Michael Rivera
  </Tooltip>
);
class FlintPage extends Component{
     constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth };
    }
    state={
        activeAnimal: null,
        modalShow: false
    }
    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }
    showModalHandler = (handle)=>{
        this.setState({activeAnimal: handle, modalShow: !this.state.modalShow});
    }
    enterArea(area) {
    this.setState({ hoveredArea: area });
    }
    leaveArea(area) {
        this.setState({ hoveredArea: null });
    }
    getTipPosition(area) {
        return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
    }
    render(){
        const { windowWidth } = this.state;
        let MAP = {
        name: "my-map",
        areas: [
                { name: "Barbour’s Map Turtle", shape: "circle", coords: [793,983,167]},
                { name: "Shoal Bass", shape: "circle", coords: [1693,1156,167]},
                { name: "Mussels: Purple Bank Climber, Shiny-rayed Pocketbook, Gulf Moccasin Shell, Oval Pigtoe", shape: "circle", coords: [2587,989,172]},
            ]
        }
        var description;
        for(let i = 0; i < SpeciesData.flint.length; i++){
            if(this.state.activeAnimal === SpeciesData.flint[i].name){
                description = SpeciesData.flint[i].info;
            }
        }  
        return(
        <div>
             <div className="showcase">
            <ImageMapper src={flintpic} map={MAP} width={windowWidth} imgWidth={3260}
    	        onClick={area => this.showModalHandler(area.name)}
    	        onMouseEnter={area => this.enterArea(area)}
    	        onMouseLeave={area => this.leaveArea(area)}
                />
            {
    	        this.state.hoveredArea &&
    	        <span className="tooltip"
    	          style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
    		        { this.state.hoveredArea && this.state.hoveredArea.name}
    	        </span>
                }
            </div>
            <div className={classes.accord}>
            <AccordionPage animalList={SpeciesData.flint}/>
            </div>
            <div className={classes.chevronContainer}><i onClick={() =>window.scrollTo(100,750)}className={classes.chevron}></i></div>
            <div className={classes.text}>
             <div className={classes.info}>
                        <Row>
                            <Col md="auto"><h2 className = {classes.h2}>Welcome to the Flint!</h2></Col>
             <Col></Col>
                        </Row>
                        <Row>
                            <Col md="8">
                        <p className={classes.pL}>
               The Flint River, which is contained entirely within the state of Georgia,
                originates on the southern edge of the Atlanta metropolitan area under
                the Hartsfield-Jackson Atlanta International Airport, in Clayton County,
                and flows southerly in a wide eastward arc to Decatur County in southwest
                Georgia, before flowing into Lake Seminole. 
            </p>
             </Col>
                        <Col></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col></Col>
                            <Col md="8">
                        <p className={classes.pR}>
                The Flint River first sees the light of day at the mouth of a concrete 
                culvert on the south side of Virginia Avenue in Hapeville, just north of
                Hartsfield Atlanta International Airport.
            </p>
            </Col>
                        </Row>
                        <br />
                         <Row>
                            <Col md="8">
                        <p className={classes.pL}>
                The length of the main stem of the Flint River is 349 river miles, and it
                drains an area of 8,460 square miles. The Flint River flows unimpeded for
                nearly 220 river miles, which makes it one of only 40 rivers in the U.S.
                that flow more than 200 river miles unimpeded.
            </p>
           </Col>
                        <Col></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col></Col>
                            <Col md="8">
                        <p className={classes.pR}>
                The lower part of the Flint River Basin, together with the upper part of
                the Apalachicola Basin, has the highest species density of amphibians and
                reptiles on the continent, north of Mexico.
            </p>
             </Col>
                        </Row>
                        <br />
                         <Row>
                            <Col md="8">
                        <p className={classes.pL}>
                A new species of fish, called the Halloween Darter, is found only in the
                Flint, Chattahoochee and Apalachicola Rivers. The Halloween Darter, or
                Percina crypta, is a small fish that requires a habitat of swiftly
                flowing water over rocky shoals. The Shoal bass, a species of freshwater
                fish in the sunfish family, is considered the signature species of the
                Flint River. 
            </p>
                        </Col>
                        <Col></Col>
                        </Row>
                        </div>
            <br></br>
            <AnimalButton show={this.state.modalShow} animal={this.state.activeAnimal} description={description} onHide={() => this.setState({modalShow:false})} />
            </div>
</div>);
    }
}
export default FlintPage;