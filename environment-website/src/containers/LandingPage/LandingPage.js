import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from './components/Button/Button';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import LandingButton from '../../components/LandingButton/LandingButton';

class LandingPage extends Component{
    render(){
        return(
        <div>
<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
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
    <LandingButton/>

</div>);
    }
}
export default LandingPage;