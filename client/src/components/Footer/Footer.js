import React from "react";
import { Container, SocialIcons } from "./style";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <Container>
      <span>
        Friends & Fitness Sports Club ©2023 Created by Friends & Fitness
      </span>
      <SocialIcons>
        <FacebookFilled />
        <InstagramFilled />
        <TwitterSquareFilled />
      </SocialIcons>
    </Container>
  );
};

export default Footer;
