import React from "react";
import { Container, Logo, NavContent, NavItem } from "./style";
import logo from "../../resources/images/logo.png";

const Navbar = () => {
  return (
    <Container>
      <Logo>
        Friends & Fitness <span>Sports Club</span>{" "}
      </Logo>
      <NavContent>
        <NavItem>Home</NavItem>
        <NavItem>Our Team</NavItem>
        <NavItem>About Us</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Contact</NavItem>
      </NavContent>
    </Container>
  );
};

export default Navbar;
