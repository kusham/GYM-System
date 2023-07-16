import React, { useState } from "react";
import { Card, ForgotPassword, InputFelid, LoginButton } from "./style";
import { AuthFooter, AuthTitle, Container } from "../style";
import { UnlockFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Form } from "antd";
import { login } from "../../../actions/auth/AuthActions";

const SignInPage = () => {
  const [inputs, setInputs] = useState({
    userID: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log(inputs);
    login(inputs, navigateToDashBoard)
  };
  const navigateToDashBoard = () => {
    navigate("/dashboard", { replace: true });
  }

  const handleOnChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  return (
    <Container>
      <Form onFinish={handleLogin}>
        <Card>
          <AuthTitle>
            Log In <UnlockFilled />
          </AuthTitle>

          <InputFelid
            name="userID"
            onChange={handleOnChange}
            placeholder="UserID"
            value={inputs.userID}
          />
          <InputFelid
            name="password"
            onChange={handleOnChange}
            placeholder="Password"
            type="password"
            value={inputs.password}
          />
          <LoginButton type="primary" htmlType="submit">
            LOG IN
          </LoginButton>
          <ForgotPassword>FORGOT PASSWORD ?</ForgotPassword>
          <AuthFooter>
            No Account ?
            <span onClick={() => navigate("/auth/signup")}>Sign Up</span>
          </AuthFooter>
        </Card>
      </Form>
    </Container>
  );
};

export default SignInPage;
