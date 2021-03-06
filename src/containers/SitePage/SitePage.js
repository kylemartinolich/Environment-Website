import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from '.././LandingPage/LandingPage';
import PagePicker from '../../components/PagePicker/PagePicker';
import FlintPage from '../FlintPage/FlintPage';
import ChattaPage from '../ChattaPage/ChattaPage';
import LowerChattaPage from '../LowerChattaPage/LowerChattaPage';
import ApalaPage from '../ApalaPage/ApalaPage';
import ApalaBayPage from '../ApalaBayPage/ApalaBayPage';
import Footer from '../../components/Footer/Footer';
import Auxillary from '../../hoc/Auxillary';
import classes from './SitePage.module.css';
import { DropdownButton } from 'react-bootstrap';

class SitePage extends Component {
    state = {
        view: 'home'
    }
    updateActivePage = (page) => {
        this.setState({ view: page });
    }
    returnActivePage = () => {
        if (this.state.view === 'home') {
            return (<LandingPage changePage={this.updateActivePage} />);
        }
        if (this.state.view === 'Flint') {
            return (<FlintPage />);
        }
        if (this.state.view === 'Chattahoochee') {
            return (<ChattaPage />);
        }
        if (this.state.view === 'Lower Chattahoochee') {
            return (<LowerChattaPage />);
        }
        if (this.state.view === 'Apalachicola') {
            return (<ApalaPage />);
        }
        if (this.state.view === 'Apalachicola Bay') {
            return (<ApalaBayPage />);
        }
        else {
            return (<LandingPage />);
        }
    }
    render() {
        let currentPage = this.returnActivePage();
        return (
            <Auxillary>
                <div className={classes.background}>
                    <div className={classes.normal}>
                        <PagePicker
                            currentPage={this.state.view}
                            changePage={this.updateActivePage}
                        />
                    </div>
                    <div className={classes.mobile}>
                        <DropdownButton id="dropdown-basic-button" title="Select Page">
                            <PagePicker
                                currentPage={this.state.view}
                                changePage={this.updateActivePage}
                            />
                        </DropdownButton>
                    </div>
                </div>
                <div className={classes.container}>
                    {currentPage}
                </div>
                <Footer />
            </Auxillary>
        );
    }
}
export default SitePage;