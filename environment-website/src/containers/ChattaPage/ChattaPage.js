import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from './components/Button/Button';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class ChattaPage extends Component{

    render(){
        return(
        <div>
<Jumbotron>
  <h1>Hello, Chattahoochee!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
</div>);
    }
}
export default ChattaPage;