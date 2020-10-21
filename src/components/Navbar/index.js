import React from 'react';
import { FaBars } from 'react-icons/fa';
import Nav from '../Nav';
import {
  NavbarContainer as NavbarContainerComponent,
  NavbarLogo as NavLogoComponent,
  MobileIcon,
} from './styles/NavbarElement';

export default function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <Navbar.Container>
          <Navbar.Logo to="/">My logo</Navbar.Logo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <Nav.Menu>
            <Nav.Item>
              <Nav.Links to="about">About</Nav.Links>
            </Nav.Item>
            <Nav.Item>
              <Nav.SimpleLinks to="/rdv">Prendre un rendez-vous</Nav.SimpleLinks>
            </Nav.Item>
            <Nav.Item>
              <Nav.SimpleLinks to="/tchat">Service de tchat</Nav.SimpleLinks>
            </Nav.Item>
          </Nav.Menu>
          <Nav.Btn>
            <Nav.BtnLink to="/signin">Sign In</Nav.BtnLink>
          </Nav.Btn>
        </Navbar.Container>
      </Nav>
    </>
  );
}

Navbar.Container = function NavbarContainer({ children, ...restProps }) {
  return <NavbarContainerComponent {...restProps}>{children}</NavbarContainerComponent>;
};

Navbar.Logo = function NavbarLogo({ children, ...restProps }) {
  return <NavLogoComponent {...restProps}>{children}</NavLogoComponent>;
};
