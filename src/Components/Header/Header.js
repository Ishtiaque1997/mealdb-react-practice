import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
// or less ideally
import { ButtonGroup, Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
 return (
  <div>
  <>
  <Nav className="justify-content-center bg-light header" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/menus">Menus</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/contacts">Contacts</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/manage">Manage</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/contacts">Contacts</Nav.Link>
    </Nav.Item>
  </Nav>
  
</>
   
  </div>
 );
};

export default Header;