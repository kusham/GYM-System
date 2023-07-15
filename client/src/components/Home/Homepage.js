import React from "react";
import { AuthButtons, CarouselItem, Container, CustomCarousel, LoginButton, SignUpButton } from "./style";
import carouselItem1 from '../../resources/images/carouselItem1.png'
import carouselItem2 from '../../resources/images/carouselItem2.png'
import carouselItem3 from '../../resources/images/carouselItem3.jpeg'
import carouselItem4 from '../../resources/images/carouselItem4.jpeg'
import carouselItem5 from '../../resources/images/carouselItem5.jpeg'
import carouselItem6 from '../../resources/images/carouselItem6.jpeg'
import carouselItem7 from '../../resources/images/carouselItem7.jpg'

const Homepage = () => {
  return (
    <Container>
      <CustomCarousel autoplay>
        <CarouselItem src={carouselItem1}/>
        <CarouselItem src={carouselItem2}/>
        {/* <CarouselItem src={carouselItem3}/> */}
        <CarouselItem src={carouselItem4}/>
        <CarouselItem src={carouselItem5}/>
        <CarouselItem src={carouselItem6}/>
        <CarouselItem src={carouselItem7}/>
      </CustomCarousel>
      <AuthButtons>
        <SignUpButton>Sign Up</SignUpButton>
        <LoginButton>Login</LoginButton>
      </AuthButtons>
    </Container>
  );
};

export default Homepage;
