import { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Container, Root } from "./style";
import Navbar from "./components/Navigation/Navbar";
import Homepage from "./components/Home/Homepage";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/auth/Login/LoginPage";
import SignupPage from "./components/auth/Signup/SignupPage";

function App() {
  // Retrieve user from session storage
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <Root>
      <Navbar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                user ? <Navigate to="dashboard" /> : <Navigate to="home" />
              }
            />
            <Route
              path="/home"
              element={!user ? <Homepage /> : <Navigate to="dashboard" />}
            />
            <Route
              path="/auth/login"
              element={user ? <Navigate to="dashboard" /> : <LoginPage />}
            />
            <Route
              path="/auth/signup"
              element={user ? <Navigate to="dashboard" /> : <SignupPage />}
            />
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer />
    </Root>
  );
}

export default App;
