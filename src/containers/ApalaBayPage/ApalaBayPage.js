import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './ApalaBayPage.module.css';
import AccordionPage from '../../components/Accordion/Accordion';
import AnimalButton from '../../components/AnimalButton/AnimalButton';
import SpeciesData from '../../speciesdata.json';
import apaBaypic from '../../assets/Rivers/apabay.jpg';
import ImageMapper from 'react-image-mapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ApalaBayPage extends Component{
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
        let MAP = {
            name: "my-map",
            areas: [
                { name: "Oysters (Crassostrea virginica)", shape: "circle", coords: [1655,762,175] }
            ]
        }
        var description;
        for(let i = 0; i < SpeciesData.apa.length; i++){
            if(this.state.activeAnimal === SpeciesData.apa[i].name){
                description = SpeciesData.apa[i].info;
            }
        }  
        return(
        <div>
            <div className="showcase">
            <ImageMapper src={apaBaypic} map={MAP} width={windowWidth} imgWidth={3260}
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
            <AccordionPage animalList={SpeciesData.apaBay}/>
            </div>
            <div className={classes.chevronContainer}><i onClick={() =>window.scrollTo(100,750)}className={classes.chevron}></i></div>
            <div className={classes.text}>
                 <div className={classes.info}>
                     <Row>
                        <Col md="auto"><h2 className = {classes.h2}>Welcome to the Apalachicola Bay!</h2></Col>
                            <Col></Col>
                    </Row>
                        <Row>
                     <Col md="8">
                        <p className={classes.pL}>
                Apalachicola Bay is an estuary located on the northwest coast of Florida.
                The Apalachicola Bay system also includes St. George Sound, St. Vincent
                Sound and East Bay, covering an area of about 208 square miles (540 km2).
                Water exchange occurs through Indian Pass, West Pass, East Pass and the
                Duer Channel. The estuary has been designated as a National Estuarine
                Research Reserve and the Apalachicola River is the largest source of
                freshwater to the estuary. Combined with the Chattahoochee, Flint,
                and Ochlockonee River they drain a watershed of over 20,000 square
                miles (50,000 km2) at a rate of 19,599 cubic feet (550 m3) per
                second according to the USGS (United States Geological Society)
                in 2002.
            </p>
                    </Col>
                        <Col></Col>
                        </Row>
            <br/>
            <Row>
                            <Col></Col>
                            <Col md="8">
                        <p className={classes.pR}>
                The Apalachicola Bay formerly produced 90 percent of Florida’s oysters
                but the oysters, which thrive in brackish water, appear to be diminishing
                rapidly as a result of Atlanta Municipal water usage, which is diminishing
                the fresh water flowing into the bay. The increasingly salty water also 
                increases the presence of oyster predators.
            </p>
            </Col>
                        </Row>
            <br/>
            <Row>
                            <Col md="8">
                        <p className={classes.pL}>
                In July of 2020 The Florida Fish and Wildlife Conservation Commission 
                unanimously voted to shut down the state's iconic Apalachicola oyster 
                fishery after years of drought and other pressures devastated wild 
                oyster beds. Florida fisheries regulators say a moratorium on oyster 
                harvesting for up to five years will give wild oyster reefs time to 
                regenerate.
            </p>
             </Col>
                        <Col></Col>
                        </Row>
            <br/>
             <Row>
                            <Col></Col>
                            <Col md="8">
                        <p className={classes.pR}>
                Since a 2012 federal fisheries disaster declaration, several state and 
                federal projects have sought to restore the bay but with little lasting 
                success. The annual oyster harvest has dropped from more than 3 million 
                lbs to less than 21,000 lbs. The dockside dollar value of that catch 
                declined 98% over that time period, according to the Florida Division 
                of Marine Fisheries management.
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
export default ApalaBayPage;