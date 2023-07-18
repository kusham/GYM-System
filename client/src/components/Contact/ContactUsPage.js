import React from "react";
import { Container, Content, Item, Title } from "./style";

const ContactUsPage = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <hr></hr>
      <Content>
        <Item>456 Elmwood Avenue Apartment 789 Cityville, Stateland 54321</Item>
        <Item>+0098 9893 5647  / +0096 3434 5678</Item>

        <Item>friendandfitness@gmail.com <br></br>friends.fitness@gmail.com</Item>
      </Content>
    </Container>
  );
};

export default ContactUsPage;
