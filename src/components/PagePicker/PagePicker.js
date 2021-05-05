import React from 'react';
import Nav from 'react-bootstrap/Nav';
import classes from './PagePicker.module.css';

const pagePicker = (props) => (
    <div className={classes.navbar}>
        <Nav
        className="justify-content-center"
        variant="pills"
        activeKey="/home"
        >
        <Nav.Item>
    <Nav.Link className={classes.text} active={props.currentPage === 'home'} onClick={() => props.changePage('home')}>Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className={classes.text} active={props.currentPage === 'Apalachicola'} onClick={() => props.changePage('Apalachicola')}>
      Apalachicola
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className={classes.text} active={props.currentPage === 'Apalachicola Bay'} onClick={() => props.changePage('Apalachicola Bay')}>
      Apalachicola Bay
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className={classes.text} active={props.currentPage === 'Chattahoochee'} onClick={() => props.changePage('Chattahoochee')}>Chattahoochee</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className={classes.text} active={props.currentPage === 'Flint'} onClick={() => props.changePage('Flint')}>Flint</Nav.Link>
  </Nav.Item>
    <Nav.Item>
    <Nav.Link className={classes.text} active={props.currentPage === 'Lower Chattahoochee'} onClick={() => props.changePage('Lower Chattahoochee')}>Water Wars</Nav.Link>
  </Nav.Item>
</Nav>
    </div>
);
export default pagePicker;