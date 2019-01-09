import * as React from 'react';
import { IndexLinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
export const NavMenu: React.StatelessComponent<{}> = () => {
  return (
<div className='main-nav'>
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
    <IndexLinkContainer to="/" activeClassName="active">
    <a href="#brand">React-Bootstrap</a>
    </IndexLinkContainer>     
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
    <IndexLinkContainer to="about">
         <NavItem><span className='glyphicon glyphicon-education'/>About</NavItem>
    </IndexLinkContainer>        
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown" >
        <IndexLinkContainer to="members">
          <MenuItem>Members</MenuItem>
       </IndexLinkContainer>  
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  );
}