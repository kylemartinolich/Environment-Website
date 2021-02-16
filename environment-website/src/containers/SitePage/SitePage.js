import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from './components/Button/Button';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import LandingPage from '.././LandingPage/LandingPage'
class SitePage extends Component{
    state = {
        view: 'home'
    }

    
    render(){
        return(
        <div>
        <LandingPage/>
        </div>
        );
    }
}
export default SitePage;