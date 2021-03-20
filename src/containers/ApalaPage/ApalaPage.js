import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from './components/Button/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import classes from './ApalaPage.module.css';
import AccordionPage from '../../components/Accordion/Accordion';
import SpeciesData from '../../speciesdata.json';

class ApalaPage extends Component{

    render(){
        return(
        <div>
        <header className={classes.showcase}>
                <div className={classes.showcasecontent}>
                    <div className={classes.container}>
                    </div>

                </div>

            </header>
            <AccordionPage animalList={SpeciesData.apa}/>
            <div className={classes.text}>
            <h2>Welcome to the Lower Chattahoochee!</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Velit dignissim sodales ut eu sem integer vitae justo eget. Porttitor eget dolor morbi non arcu. 
                Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Metus aliquam eleifend mi in nulla posuere. 
                Amet justo donec enim diam vulputate ut pharetra. Dolor sit amet consectetur adipiscing elit. 
                Tempor nec feugiat nisl pretium fusce id velit. Mauris cursus mattis molestie a iaculis at erat. 
                Praesent semper feugiat nibh sed pulvinar. Commodo quis imperdiet massa tincidunt nunc pulvinar. 
                Donec et odio pellentesque diam volutpat. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
            </p>
            <br></br>
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