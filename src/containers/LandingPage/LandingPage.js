import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from './components/Button/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import LandingButton from '../../components/LandingButton/LandingButton';
import Chattahoochee_watershed from '../../assets/Chattahoochee_watershed.png';
import classes from './LandingPage.module.css';


class LandingPage extends Component{
    state={
        image:Chattahoochee_watershed
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
                        <h1 className={classes.Title}>Hello, World!</h1>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                            <br></br>
                            <p>
                            <a href="" className={classes.btn}>Learn more</a>
                            </p>
                    </div>

                </div>

            </header>
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
            <div className={classes.mapContainer}>
                <img className={classes.map} alt="Map" src={this.state.image}/>
                <LandingButton className={classes.items} changeImage={this.changeImageShown} changePage={this.props.changePage}/>
            </div>
        </div>);
    }
}
export default LandingPage;