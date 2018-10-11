import React from 'react';
import {
  Navbar, Alignment, NavbarGroup, NavbarHeading,
} from '@blueprintjs/core';

const Nav = () => (
  <Navbar>
    <NavbarGroup align={Alignment.LEFT}>
      <NavbarHeading>BhadaDar</NavbarHeading>
    </NavbarGroup>
  </Navbar>
);
export default Nav;
