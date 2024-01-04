import { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className='bg-opacity-50 bg-light' expand container>
        <NavbarBrand className='fs-1 fw-bold text-white' href="/">My Movies List</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/movies/">Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">
                About Me
              </NavLink>
            </NavItem>        
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
