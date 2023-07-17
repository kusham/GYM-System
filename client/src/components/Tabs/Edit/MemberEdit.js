import React, { useState } from "react";
import { Row, Col } from "antd";
import {
  CheckBoxes,
  CustomDatePicker,
  CustomForm,
  CustomSelect,
  FormItem,
  InputFelid,
  Label,
  CreateButton,
  EditContainer,
} from "../style";
import { updateUser } from "../../../actions/AuthActions";
const preferenceOptions = [
  { label: "Weight Loss", value: "Weight Loss" },
  { label: "Muscle Building", value: "Muscle Building" },
  { label: "Athletic Performance", value: "Athletic Performance" },
];
const MemberEdit = ({ member, setEditMode }) => {
  const [inputs, setInputs] = useState(member);
  const handleUpdate = async () => {
    const res = await updateUser(inputs);
    if(res) {
      setEditMode(false)
    }
  };
  const handleOnChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  const handleOnChangeDatePicker = (date) => {
    setInputs({ ...inputs, dob: date });
  };
  return (
    <EditContainer>
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
                  { value: "not to reveal", label: "Not to Reveal" },
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
                  { value: "hikkaduwa", label: "Hikkaduwa" },
                  { value: "unawatuna", label: "Unawatuna" },
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
              <Label>Other Info</Label>
              <InputFelid
                name="otherInfo"
                onChange={handleOnChange}
                value={inputs.otherInfo}
              />
            </FormItem>
          </Col>
          
        </Row>

        <Row gutter={24}>
          
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>City</Label>
              <InputFelid
                name="city"
                onChange={handleOnChange}
                value={inputs.city}
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

        <FormItem style={{ alignItems: "center" }}>
          <CreateButton type="primary" htmlType="submit" onClick={handleUpdate}>
            SUBMIT
          </CreateButton>
        </FormItem>
      </CustomForm>
    </EditContainer>
  );
};

export default MemberEdit;
