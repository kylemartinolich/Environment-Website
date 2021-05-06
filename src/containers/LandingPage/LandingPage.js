import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingButton from '../../components/LandingButton/LandingButton';
import Chattahoochee_watershed from '../../assets/Chattahoochee_watershed.png';
import classes from './LandingPage.module.css';

var ReactRotatingText = require('react-rotating-text');
class LandingPage extends Component {
    state = {
        image: Chattahoochee_watershed,
        myRef: null
    }
    changeImageShown = (pic) => {
        this.setState({ image: pic });

    }
    render() {
        return (
            <div className={classes.LandingPage}>
                <header className={classes.showcase}>
                    <div className={classes.showcasecontent}>
                        <div className={classes.container}>
                            <h1 className={classes.Title}>
                                Learn more about: <br></br><ReactRotatingText className='react-rotating-text-cursor' items={['Chattahoochee', 'Apalachicola', 'Flint']} />
                            </h1>
                            <p className={classes.subheader}>
                                Click the arrow down below to get started!
                            </p>
                            <br></br>
                            <div className={classes.chevronContainer}><i onClick={() => window.scrollTo(100, 850)} className={classes.chevron}></i></div>
                        </div>
                    </div>
                </header>
                <div className={classes.mapContainer}>
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
                    <img className={classes.map} alt="Map" src={this.state.image} />
                    <LandingButton className={classes.items} changeImage={this.changeImageShown} changePage={this.props.changePage} />
                </div>
            </div>);
    }
}
export default LandingPage;