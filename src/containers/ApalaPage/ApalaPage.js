import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import classes from './ApalaPage.module.css';
import AccordionPage from '../../components/Accordion/Accordion';
import SpeciesData from '../../speciesdata.json';
import AnimalButton from '../../components/AnimalButton/AnimalButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import apapic from '../../assets/Rivers/apalachicola.jpg';
import ImageMapper from 'react-image-mapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
     Apalachicola River, Georgia © Ebyabe
  </Tooltip>
);
class ApalaPage extends Component{
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
    }
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
        let URL = {apapic}
let MAP = {
  name: "my-map",
  areas: [
    { name: "Eastern Indigo Snake", shape: "circle", coords: [2277,667,172]},
    { name: "Torreya Tree", shape: "circle", coords: [435,655,170]},
    { name: "Gulf Sturgeon", shape: "circle", coords: [1672,961,179]},
    { name: "Red-cockaded Woodpecker", shape: "circle", coords: [1672,298,173]},
    { name: "Fat Threeridge Mussel", shape: "circle", coords: [2456,1169,167]},
    { name: "Apalachicola Dusky Salamander", shape: "circle", coords: [2932,655,167]},
    { name: "Florida Black Bear", shape: "circle", coords: [1014,655,170]},
    { name: "Oysters (Crassostrea virginica)", shape: "circle", coords: [888,1137,171]} 
  ]
}
var description;
var piclink;
for(let i = 0; i < SpeciesData.apa.length; i++){
    if(this.state.activeAnimal === SpeciesData.apa[i].name){
        description = SpeciesData.apa[i].info;
        piclink = i;
    }
}
        return(
        <div>
            <div className="showcase">
            <ImageMapper src={apapic} map={MAP} width={windowWidth} imgWidth={3260}
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
            <AccordionPage animalList={SpeciesData.apa}/>
            </div>
            <div className={classes.chevronContainer}><i onClick={() =>window.scrollTo(100,750)}className={classes.chevron}></i></div>
            <div className={classes.text}>
                 <div className={classes.info}>
                        <Row>
                            <Col md="auto"><h2 className = {classes.h2}>Welcome to the Apalachicola!</h2></Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col md="8">
                        <p className={classes.pL}>
                            The Apalachicola River basin is a geographic area in the Florida Panhandle that drains a watershed of some
                            20,000 square miles and it is one of the nations most important biological hotspots. The headwaters of the
                            Apalachicola are the Chattahoochee River flowing from Georgia’s southern Appalachians, and the Flint River,
                            which begins south of Atlanta. Beginning at the confluence of these rivers, the Apalachicola River flows for
                            107 miles south to Apalachicola Bay. It rolls past 150-foot tall bluffs, etched with deep steephead ravines,
                            and the state’s largest floodplain forest – great habitat for all kinds of animals.
                        </p>
                        </Col>
                        <Col></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col></Col>
                            <Col md="8">
                        <p className={classes.pR}>
                            The Apalachicola River basin has the highest density of amphibian (44) and reptile (64) species north of Mexico.
                            The river and its floodplain are also home to more than 1,000 species of plants, 52 species of mammals, 60
                            species of snails and clams, five federally listed mussels, 315 bird species, and 86 species of fish.
                        </p>
                         </Col>
                        </Row>
                        <br />
                         <Row>
                            <Col md="8">
                        <p className={classes.pL}>
                            Historically, Apalachicola Bay produced 90 percent of Florida’s oysters and 13 percent of the nation’s harvest.
                            It was known for its outstanding commercial fishing, shrimping and crabbing. Unfortunately the bay’s productively
                            declined as the river was manipulated over the years.
                        </p>
                        </Col>
                        <Col></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col></Col>
                            <Col md="8">
                        <p className={classes.pR}>
                            In 2010 this outstanding fishery collapsed due to little freshwater flowing into the estuary and over-harvesting
                            in response to the Deepwater Horizon oil spill. The bay’s oyster populations have plummeted, and some of its underwater
                            plants have disappeared as a result which has impacted many of the bay’s other species. The bay needs thriving oyster
                            reefs and aquatic vegetation to provide cover and breeding ground for mussels, crabs, snails, shrimp and fish.
                        </p>
                         </Col>
                        </Row>
                    </div>
            <br></br>
            <AnimalButton show={this.state.modalShow} animal={this.state.activeAnimal} description={description} onHide={() => this.setState({modalShow:false})} />
            </div>
</div>);
    }
}
export default ApalaPage;