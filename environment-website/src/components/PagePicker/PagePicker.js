import React from 'react';
import Nav from 'react-bootstrap/Nav';

const pagePicker = (props) => (
    <div>
        <Nav
        className="justify-content-center"
        variant="pills"
        activeKey="/home"
  
>
        <Nav.Item>
    <Nav.Link  active={props.currentPage === 'home'} onClick={() => props.changePage('home')}>Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link active={props.currentPage === 'Upper Chattahoochee'} onClick={() => props.changePage('Upper Chattahoochee')}>Upper Chattahoochee</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link active={props.currentPage === 'Lower Chattahoochee'} onClick={() => props.changePage('Lower Chattahoochee')}>Lower Chattahoochee</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link active={props.currentPage === 'Flint'} onClick={() => props.changePage('Flint')}>Flint</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link active={props.currentPage === 'Apalachicola'} onClick={() => props.changePage('Apalachicola')}>
      Apalachicola
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link active={props.currentPage === 'Apalachicola Bay'} onClick={() => props.changePage('Apalachicola Bay')}>
      Apalachicola Bay
    </Nav.Link>
  </Nav.Item>
</Nav>
    </div>
);

export default pagePicker;