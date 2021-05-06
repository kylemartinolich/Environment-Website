import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './ChattaPage.module.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import AnimalButton from '../../components/AnimalButton/AnimalButton';
import Tooltip from 'react-bootstrap/Tooltip';
import AccordionPage from '../../components/Accordion/Accordion';
import SpeciesData from '../../speciesdata.json';
import chattapic from '../../assets/Rivers/chattahoochee.jpg';
import ImageMapper from 'react-image-mapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
     Walton on Chattahoochee, Georgia © Thomson200
  </Tooltip>
);
class ChattaPage extends Component{
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
                { name: "Barbour’s Map Turtle", shape: "circle", coords: [1943,995,165]},
                { name: "Mussels: Purple Bank Climber, Shiny-rayed Pocketbook, Gulf Moccasin Shell, Oval Pigtoe", shape: "circle", coords: [1348,983,170]},  
            ]
        }
        var description;
            for(let i = 0; i < SpeciesData.chatta.length; i++){
                if(this.state.activeAnimal === SpeciesData.chatta[i].name){
                    description = SpeciesData.chatta[i].info;
                }
            }  
        return(
        <div>
            <div className="showcase">
            <ImageMapper src={chattapic} map={MAP} width={windowWidth} imgWidth={3260}
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
            <AccordionPage animalList={SpeciesData.chatta}/>
            </div>
            <div className={classes.chevronContainer}><i onClick={() =>window.scrollTo(100,750)}className={classes.chevron}></i></div>
             <div className={classes.text}>
            <div className={classes.info}>
                        <Row>
                            <Col md="auto"><h2 className = {classes.h2}>Welcome to the Chattahoochee!</h2></Col>
            <Col></Col>
                        </Row>
                        <Row>
                            <Col md="8">
                        <p className={classes.pL}>
                The Chattahoochee River begins its journey south on the southern edge of the Blue Ridge mountains,
                just below Brasstown Bald, Georgia’s highest point at 4,784 feet.  The word Chattahoochee is derived
                from the Creek Indian words meaning painted rock.  From its birthplace at Coon Den Ridge in Union
                County, Georgia, the river flows south for 430 miles to its confluence with the Flint River.
                The Chattahoochee basin drains an area of 8,770 square miles and is the most heavily used
                water resource in Georgia.
            </p>
            </Col>
                        <Col></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col></Col>
                            <Col md="8">
                        <p className={classes.pR}>
                The Chattahoochee River Basin is inhabited by about 24 species of freshwater aquatic turtles,
                about 37 species of salamanders and sirens, about 30 species of frogs and toads, and the American
                alligator. The river is home to 9 state threatened or endangered plant species.
            </p>
            </Col>
                        </Row>
                        <br />
                         <Row>
                            <Col md="8">
                        <p className={classes.pL}>
                The Chattahoochee River is the second southern-most trout habitat in the United States 
                (other: Guadalupe River, Texas) and is also one of only two trout streams in North America 
                that flow through a major urban area (other: Bow River, Canada).
            
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
export default ChattaPage;