import React, { useState } from "react";
import { Container } from "../style";
import { Row, Col } from "antd";
import {
  CheckBoxes,
  CustomDatePicker,
  CustomForm,
  CustomSelect,
  FormItem,
  InputFelid,
  Label,
  SignUpButton,
  SingleCheckBox,
} from "./style";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../actions/auth/AuthActions";

const preferenceOptions = [
  { label: "Weight Loss", value: "Weight Loss" },
  { label: "Muscle Building", value: "Muscle Building" },
  { label: "Athletic Performance", value: "Athletic Performance" },
];

const SignupPage = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    nic: "",
    dob: "",
    gender: "male",
    mobile: "",
    password: "",
    branch: "hikkaduwa",
    purpose: [],
    agree: false,
  });
  const navigate = useNavigate();
  const handleSignIn = () => {
    console.log(inputs);
    signIn(inputs, navigateToDashBoard);
  };
  const navigateToDashBoard = () => {
    navigate("/auth/login", { replace: true });
  };
  const handleOnChange = (event) => {
    console.log(event.target);
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  const handleOnChangeDatePicker = (date) => {
    setInputs({ ...inputs, dob: date });
  };
  return (
    <Container>
      <CustomForm onFinish={handleSignIn}>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Full Name</Label>
              <InputFelid
                name="fullName"
                onChange={handleOnChange}
                value={inputs.fullName}
              />
            </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Birthday</Label>
              <CustomDatePicker
                name="dob"
                onChange={handleOnChangeDatePicker}
                value={inputs.dob}
              />
            </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Gender</Label>
              <CustomSelect
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ]}
                onChange={(value) => {
                  setInputs({ ...inputs, gender: value });
                }}
                value={inputs.gender}
              />
            </FormItem>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Preferred Branch</Label>
              <CustomSelect
                options={[
                  { value: "hikkaduwa", label: "Hikaduwa" },
                  { value: "galle", label: "Galle" },
                ]}
                onChange={(value) => {
                  setInputs({ ...inputs, branch: value });
                }}
                value={inputs.branch}
              />
            </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Mobile</Label>
              <InputFelid
                name="mobile"
                onChange={handleOnChange}
                value={inputs.mobile}
              />
            </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Email</Label>
              <InputFelid
                name="email"
                onChange={handleOnChange}
                value={inputs.email}
              />
            </FormItem>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>NIC</Label>
              <InputFelid
                name="nic"
                onChange={handleOnChange}
                value={inputs.nic}
              />
            </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Password</Label>
              <InputFelid
                name="password"
                onChange={handleOnChange}
                value={inputs.password}
              />
            </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Preference</Label>
              <CheckBoxes
                value={inputs.purpose}
                options={preferenceOptions}
                onChange={(value) => setInputs({ ...inputs, purpose: value })}
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <SingleCheckBox
            name="agree"
            onChange={(value) =>
              setInputs({ ...inputs, agree: value.target.checked })
            }
            value={inputs.agree}
          >
            I, agree to the terms and conditions of the gym membership and
            acknowledge that I have provided accurate and complete personal and
            health information. I understand that the gym is not liable for any
            injuries or accidents that may occur while using the facilities and
            that it is my responsibility to use the equipment and facilities
            safely and in accordance with the gym's rules and regulations.
          </SingleCheckBox>
        </Row>

        <FormItem style={{ alignItems: "center" }}>
          <SignUpButton
            disabled={!inputs.agree}
            type="primary"
            htmlType="submit"
            onClick={handleSignIn}
          >
            SUBMIT
          </SignUpButton>
        </FormItem>
      </CustomForm>
    </Container>
  );
};

export default SignupPage;
