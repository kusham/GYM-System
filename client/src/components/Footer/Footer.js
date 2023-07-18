import React from "react";
import { Container, SocialIcons } from "./style";
import {
  FacebookFilled
} from "@ant-design/icons";

const Footer = () => {
  return (
    <Container>
      <span>
        Friends & Fitness Sports Club ©2023 Created by Friends & Fitness
      </span>
      <SocialIcons>
        <FacebookFilled />
      </SocialIcons>
    </Container>
  );
};

export default Footer;
