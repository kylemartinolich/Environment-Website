import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from './components/Button/Button';
//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Button from 'react-bootstrap/Button';
import LandingButton from '../../components/LandingButton/LandingButton';
import Chattahoochee_watershed from '../../assets/Chattahoochee_watershed.png';
import classes from './LandingPage.module.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

var ReactRotatingText = require('react-rotating-text');
const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
     Chattahoochee River, Georgia © Keizers
  </Tooltip>
);
const mapTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
     ACF Projection © Chattahoochee River Keeper
  </Tooltip>
);




class LandingPage extends Component{
    state={
        image:Chattahoochee_watershed,
        myRef:null
    }


    changeImageShown = (pic)=>{
        this.setState({image: pic});

    }
   
    render(){
        return(
        <div className={classes.LandingPage}>
            <header className={classes.showcase}>
                <div className={classes.showcasecontent}>
                    <div className={classes.container}>
                        <h1 className={classes.Title}>
                                Learn more about: <br></br><ReactRotatingText className='react-rotating-text-cursor'items={['Chattahoochee', 'Apalachicola', 'Flint']} />
                            </h1>
                            <p>
                                Click the arrow down below to get started!
                            </p>
                            <br></br>
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
            <div className={classes.text}>
            <h2>Welcome to the Environment Website!</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Velit dignissim sodales ut eu sem integer vitae justo eget. Porttitor eget dolor morbi non arcu. 
                Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Metus aliquam eleifend mi in nulla posuere. 
                Amet justo donec enim diam vulputate ut pharetra. Dolor sit amet consectetur adipiscing elit. 
                Tempor nec feugiat nisl pretium fusce id velit. Mauris cursus mattis molestie a iaculis at erat. 
                Praesent semper feugiat nibh sed pulvinar. Commodo quis imperdiet massa tincidunt nunc pulvinar. 
                Donec et odio pellentesque diam volutpat. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
            </p>
            </div>
            <div className={classes.mapContainer}>
                <div class="position-absolute bottom-0 left-0">
                    <OverlayTrigger
                        placement="right"
                            delay={{ show: 250, hide: 400 }}
                                overlay={mapTooltip}
                                >
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-info-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>
                                                                  
                    </OverlayTrigger>
                </div>
                <img  className={classes.map} alt="Map" src={this.state.image}/>
                <LandingButton className={classes.items} changeImage={this.changeImageShown} changePage={this.props.changePage}/>
            </div>
        </div>);
    }
}
export default LandingPage;