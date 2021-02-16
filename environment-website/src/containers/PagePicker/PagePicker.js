import React from 'react';
import Nav from 'react-bootstrap/Nav';

const pagePicker = (props) => (
    <div>
        <Nav
  activeKey="/home"
  
>
        <Nav.Item>
    <Nav.Link href="/home" disabled={props.currentPage == 'home'} onClick={() => props.changePage('home')}>Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" disabled={props.currentPage == 'chatta'} onClick={() => props.changePage('chatta')}>Chattahoochee</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2" disabled={props.currentPage == 'flint'} onClick={() => props.changePage('flint')}>Flint</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">
      Apalachicola
    </Nav.Link>
  </Nav.Item>
</Nav>
    </div>
);

export default pagePicker;