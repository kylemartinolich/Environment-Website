import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from './components/Button/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import classes from './ApalaBayPage.module.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import AccordionPage from '../../components/Accordion/Accordion';
import AnimalButton from '../../components/AnimalButton/AnimalButton';
import Tooltip from 'react-bootstrap/Tooltip';
import SpeciesData from '../../speciesdata.json';
import apaBaypic from '../../assets/Rivers/apabay.jpg';
import ImageMapper from 'react-image-mapper';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
     Lake Wimico, Florida © Kierstyn Cox/TNC
  </Tooltip>
);
class ApalaBayPage extends Component{

    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth };
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

    state={
        modalShow: false
    }

    showModalHandler = (handle)=>{
        this.setState({showModal: !this.state.showModal});
        console.log("Test");
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
        /*return <div>Current window width: {windowWidth}</div>*/

        let URL = { apaBaypic }
        let MAP = {
            name: "my-map",
            areas: [
                { name: "Oysters", shape: "circle", coords: [1655,762,175] }
            ]
        }

        return(
        <div>
            <div className="showcase">
            <ImageMapper src={apaBaypic} map={MAP} width={windowWidth} imgWidth={3260}
    	        onClick={area => this.clicked(area)}
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
            <h2>Welcome to the Apalachicola Bay!</h2>
            <p>
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
            <br/>
            <p>
                The Apalachicola Bay formerly produced 90 percent of Florida’s oysters
                but the oysters, which thrive in brackish water, appear to be diminishing
                rapidly as a result of Atlanta Municipal water usage, which is diminishing
                the fresh water flowing into the bay. The increasingly salty water also 
                increases the presence of oyster predators.
            </p>
            <br/>
            <p>
                In July of 2020 The Florida Fish and Wildlife Conservation Commission 
                unanimously voted to shut down the state's iconic Apalachicola oyster 
                fishery after years of drought and other pressures devastated wild 
                oyster beds. Florida fisheries regulators say a moratorium on oyster 
                harvesting for up to five years will give wild oyster reefs time to 
                regenerate.
            </p>
            <br/>
            <p>
                Since a 2012 federal fisheries disaster declaration, several state and 
                federal projects have sought to restore the bay but with little lasting 
                success. The annual oyster harvest has dropped from more than 3 million 
                lbs to less than 21,000 lbs. The dockside dollar value of that catch 
                declined 98% over that time period, according to the Florida Division 
                of Marine Fisheries management.
            </p>
            <br></br>
            </div>
        </div>);
    }
}
export default ApalaBayPage;
/*
<Jumbotron>
  <h1>Hello, Apalachacola Bay!</h1>
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