import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from './components/Button/Button';
import LandingPage from '.././LandingPage/LandingPage';
import PagePicker from '../../components/PagePicker/PagePicker';
import FlintPage from '../FlintPage/FlintPage';
import UpperChattaPage from '../UpperChattaPage/UpperChattaPage';
import LowerChattaPage from '../LowerChattaPage/LowerChattaPage';
import ApalaPage from '../ApalaPage/ApalaPage';
import ApalaBayPage from '../ApalaBayPage/ApalaBayPage';
import Footer from '../../components/Footer/Footer';
import Auxillary from '../../hoc/Auxillary';
import classes from './SitePage.module.css';

class SitePage extends Component{
    state = {
        view: 'home'
    }

    
    updateActivePage = (page) =>{
        this.setState({view: page});
    }
    returnActivePage = () =>{
        if(this.state.view === 'home'){
            return (<LandingPage changePage = {this.updateActivePage}/>);
        }
        if(this.state.view === 'Flint'){
            return (<FlintPage/>);
        }
        if(this.state.view === 'Chattahoochee'){
            return (<UpperChattaPage/>);
        }
        if(this.state.view === 'Lower Chattahoochee'){
            return (<LowerChattaPage/>);
        }
        if(this.state.view === 'Apalachicola'){
            return (<ApalaPage/>);
        }
        if(this.state.view === 'Apalachicola Bay'){
            return (<ApalaBayPage/>);
        }
        else{
            return (<LandingPage/>);
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
            <div className={classes.container}>
            {currentPage}
            </div>
            <Footer/>
        </Auxillary>
        );
    }
}
export default SitePage;