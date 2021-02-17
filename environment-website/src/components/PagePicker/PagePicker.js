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
    <Nav.Link  active={props.currentPage == 'home'} onClick={() => props.changePage('home')}>Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link active={props.currentPage == 'chatta'} onClick={() => props.changePage('chatta')}>Chattahoochee</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link active={props.currentPage == 'flint'} onClick={() => props.changePage('flint')}>Flint</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link active={props.currentPage == 'apala'} onClick={() => props.changePage('apala')}>
      Apalachicola
    </Nav.Link>
  </Nav.Item>
</Nav>
    </div>
);

export default pagePicker;