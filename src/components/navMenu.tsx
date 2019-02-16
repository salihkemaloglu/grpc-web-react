import * as React from 'react';
import { IndexLinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
export const NavMenu: React.StatelessComponent<{}> = () => {
  return (
    <div className='main-nav'>
      <Navbar bg="dark" variant="dark">
        <IndexLinkContainer to="/" activeClassName="active">
          <Navbar.Brand >ChainPass</Navbar.Brand>
        </IndexLinkContainer>
        <Nav className="mr-auto">
        <IndexLinkContainer to="/" activeClassName="active">
        <Nav.Link >Home</Nav.Link>
        </IndexLinkContainer>
        <IndexLinkContainer to="members" activeClassName="active">
        <Nav.Link >menbers</Nav.Link>
        </IndexLinkContainer>
        <IndexLinkContainer to="about" activeClassName="active">
        <Nav.Link >about</Nav.Link>
        </IndexLinkContainer>
        <IndexLinkContainer to="login" activeClassName="active">
        <Nav.Link >login</Nav.Link>
        </IndexLinkContainer>    
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}