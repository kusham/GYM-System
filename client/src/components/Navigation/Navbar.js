import React from "react";
import { Container, Logo, NavContent, NavItem } from "./style";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo>
        Friends & Fitness <span>Sports Club</span>{" "}
      </Logo>
      <NavContent>
        <NavItem onClick={() => navigate("/home")}>Home</NavItem>
        <NavItem>Our Team</NavItem>
        <NavItem>About Us</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Contact</NavItem>
      </NavContent>
    </Container>
  );
};

export default Navbar;
