import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer as SidebarContainerComponent,
  SidebarWrapper as SidebarWrapperComponent,
  SidebarMenu as SidebarMenuComponent,
  SidebarLink as SidebarLinkComponent,
  SidebarSimpleLinks as SidebarSimpleLinksComponent,
  SideBtnWrap,
  SidebarRoute as SidebarRouteComponent,
} from './styles/SideBar';

export default function Sidebar({ isOpen, toggle }) {
  return (
    <Sidebar.Container isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <Sidebar.Wrapper>
        <Sidebar.Menu>
          <Sidebar.Link to="about" onClick={toggle}>
            About
          </Sidebar.Link>
          <Sidebar.SimpleLink to="/rdv" onClick={toggle}>
            Prendre un rendez-vous
          </Sidebar.SimpleLink>
          <Sidebar.SimpleLink to="/tchat" onClick={toggle}>
            Service de tchat
          </Sidebar.SimpleLink>
          <Sidebar.Link to="signup" onClick={toggle}>
            Sign up
          </Sidebar.Link>
        </Sidebar.Menu>
        <SideBtnWrap>
          <Sidebar.Route to="/signin">Sign In</Sidebar.Route>
        </SideBtnWrap>
      </Sidebar.Wrapper>
    </Sidebar.Container>
  );
}

Sidebar.Container = function SidebarContainer({ children, ...restProps }) {
  return <SidebarContainerComponent {...restProps}>{children}</SidebarContainerComponent>;
};
Sidebar.Wrapper = function SidebarWrapper({ children, ...restProps }) {
  return <SidebarWrapperComponent {...restProps}>{children}</SidebarWrapperComponent>;
};
Sidebar.Menu = function SidebarMenu({ children, ...restProps }) {
  return <SidebarMenuComponent {...restProps}>{children}</SidebarMenuComponent>;
};
Sidebar.Link = function SidebarLink({ children, ...restProps }) {
  return <SidebarLinkComponent {...restProps}>{children}</SidebarLinkComponent>;
};
Sidebar.SimpleLink = function SidebarSimpleLinks({ children, ...restProps }) {
  return <SidebarSimpleLinksComponent {...restProps}>{children}</SidebarSimpleLinksComponent>;
};
Sidebar.Route = function SidebarRoute({ children, ...restProps }) {
  return <SidebarRouteComponent {...restProps}>{children}</SidebarRouteComponent>;
};
