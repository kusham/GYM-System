import { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Container, Footer, Root } from "./style";
import Navbar from "./components/Navigation/Navbar";
import Homepage from "./components/Home/Homepage";

function App() {
  return (
   <Root>
    <Navbar />
    <Container>
      <Homepage/>
    </Container>
    <Footer>Friends & Fitness Sports Club ©2023 Created by Friends & Fitness</Footer>
   </Root>
  );
}

export default App;
