import { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Container, Root } from "./style";
import Navbar from "./components/Navigation/Navbar";
import Homepage from "./components/Home/Homepage";
import Footer from "./components/Footer/Footer";
import SignupPage from "./components/auth/Signup/SignupPage";
import SignInPage from "./components/auth/SignIn/SignInPage";

function App() {
  // Retrieve user from session storage
  console.log(sessionStorage.getItem("user"));
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <Root>
        <BrowserRouter>
      <Navbar />
      <Container>
          <Routes>
            <Route
              path="/"
              element={
                user ? <Navigate to="/dashboard" /> : <Navigate to="home" />
              }
            />
            <Route
              path="/home"
              element={!user ? <Homepage /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="/auth/login"
              element={user ? <Navigate to="/dashboard" /> : <SignInPage />}
            />
            <Route
              path="/auth/signup"
              element={user ? <Navigate to="/dashboard" /> : <SignupPage />}
            />
          </Routes>
      </Container>
        </BrowserRouter>
      <Footer />
    </Root>
  );
}

export default App;
