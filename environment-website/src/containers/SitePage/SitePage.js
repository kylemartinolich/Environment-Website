import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from './components/Button/Button';
import LandingPage from '.././LandingPage/LandingPage';
import PagePicker from '../PagePicker/PagePicker';
import FlintPage from '../FlintPage/FlintPage';
import ChattaPage from '../ChattaPage/ChattaPage';
import Auxillary from '../../hoc/Auxillary';
class SitePage extends Component{
    state = {
        view: 'home'
    }

    
    updateActivePage = (page) =>{
        this.setState({view: page});
    }
    returnActivePage = () =>{
        if(this.state.view == 'home'){
            return (<LandingPage/>);
        }
        if(this.state.view == 'flint'){
            return (<FlintPage/>);
        }
        if(this.state.view == 'chatta'){
            return (<ChattaPage/>);
        }
        else{
            return (<FlintPage/>);
        }
    }

    render(){
        let currentPage = this.returnActivePage();
        return(
            
        <Auxillary>
            <PagePicker
            currentPage = {this.state.view}
            changePage = {this.updateActivePage}
            />
            {currentPage}
        </Auxillary>
        );
    }
}
export default SitePage;