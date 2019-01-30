import * as React from 'react';
// import { IndexLinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
export const NavMenu: React.StatelessComponent<{}> = () => {
  return (
<div className='main-nav'>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="members">menbers</Nav.Link>
      <Nav.Link href="about">about</Nav.Link>
      <Nav.Link href="login">login</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
</div>
  );
}