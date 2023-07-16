import React, { useState } from "react";
import { Row, Col } from "antd";
import {
  CustomDatePicker,
  CustomForm,
  CustomSelect,
  FormItem,
  InputFelid,
  Label,
  RegisterButton,
  Container,
} from "./style";
import { registerUsers } from "../../actions/RegistrationActions";
import { userRoles } from "../../resources/UserRoles";

const Trainer = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    nic: "",
    dob: "",
    gender: "male",
    mobile: "",
    password: "",
    specialty: "",
  });
  const handleRegister = () => {
    registerUsers(inputs, userRoles.INSTRUCTOR);
    clearForm();
  };
  const clearForm = () => {
    setInputs({
      fullName: "",
      email: "",
      nic: "",
      dob: "",
      gender: "male",
      mobile: "",
      password: "",
      specialty: "",
    });
  };
  const handleOnChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  const handleOnChangeDatePicker = (date) => {
    setInputs({ ...inputs, dob: date });
  };
  return (
    <Container>
      <CustomForm>
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
              <Label>Specialty</Label>
              <InputFelid
                name="specialty"
                onChange={handleOnChange}
                value={inputs.specialty}
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
        </Row>

        <FormItem style={{ alignItems: "center" }}>
          <RegisterButton type="primary" htmlType="submit" onClick={handleRegister}>
            SUBMIT
          </RegisterButton>
        </FormItem>
      </CustomForm>
    </Container>
  );
};

export default Trainer;
