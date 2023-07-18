import React, { useEffect, useState } from "react";
import {
  AddButton,
  ButtonContainer,
  Container,
  Data,
  DataItem,
  DataTitle,
  FormContainer,
  ProfileContent,
} from "./style";
import {
  CheckBoxes,
  CustomDatePicker,
  CustomForm,
  CustomSelect,
  FormItem,
  InputFelid,
  Label,
} from "./style";
import { Col, Row } from "antd";
import dayjs from "dayjs";
import { RegisterButton } from "../Registration/style";
import { updateUser } from "../../actions/AuthActions";

const preferenceOptions = [
  { label: "Weight Loss", value: "Weight Loss" },
  { label: "Muscle Building", value: "Muscle Building" },
  { label: "Athletic Performance", value: "Athletic Performance" },
];

const Profile = () => {
  const [profile, setProfile] = useState(
    JSON.parse(sessionStorage.getItem("profile"))
  );
  const [editMode, setEditMode] = useState(false);
  const handleEdit = () => {
    setProfile({ ...profile, dob: dayjs(profile.dob) });
    setEditMode(true);
  };
  const clearForm = () => {
    setProfile({
      fullName: "",
      email: "",
      nic: "",
      dob: dayjs(new Date()),
      gender: "male",
      mobile: "",
      password: "",
      branch: "hikkaduwa",
      purpose: [],
      weight: "",
      height: "",
      otherInfo: "",
    });
  };
  const handleUpdate = () => {
    updateUser(profile);
    setEditMode(false);
    sessionStorage.setItem("profile", JSON.stringify(profile));
  };

  const handleOnChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };
  const handleOnChangeDatePicker = (date) => {
    setProfile({ ...profile, dob: date });
  };

  return (
    <Container>
      <ButtonContainer
        style={{ justifyContent: editMode ? "flex-start" : "flex-end" }}
      >
        {editMode ? (
          <AddButton onClick={() => setEditMode(false)}>Back</AddButton>
        ) : (
          <AddButton onClick={handleEdit}>Edit</AddButton>
        )}
      </ButtonContainer>
      {!editMode ? (
        <ProfileContent>
          <Row gutter={16} style={{ marginTop: "50px" }}>
            <Col sm={24} md={8} lg={6}>
              <DataItem>
                <DataTitle>ID : </DataTitle>
                <Data>{profile.userID}</Data>
              </DataItem>
            </Col>
            <Col sm={24} md={8} lg={6}>
              <DataItem>
                <DataTitle>Full Name : </DataTitle>
                <Data>{profile.fullName}</Data>
              </DataItem>
            </Col>
            <Col sm={24} md={8} lg={6}>
              <DataItem>
                <DataTitle>Email : </DataTitle>
                <Data>{profile.email}</Data>
              </DataItem>
            </Col>
            <Col sm={24} md={8} lg={6}>
              <DataItem>
                <DataTitle>NIC : </DataTitle>
                <Data>{profile.nic}</Data>
              </DataItem>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: "50px" }}>
            <Col sm={24} md={8} lg={6}>
              <DataItem>
                <DataTitle>Birthday : </DataTitle>
                <Data>{new Date(profile.dob).toDateString()}</Data>
              </DataItem>
            </Col>
            <Col sm={24} md={8} lg={6}>
              <DataItem>
                <DataTitle>Gender : </DataTitle>
                <Data>{profile.gender}</Data>
              </DataItem>
            </Col>
            <Col sm={24} md={8} lg={6}>
              <DataItem>
                <DataTitle>Mobile : </DataTitle>
                <Data>{profile.mobile}</Data>
              </DataItem>
            </Col>
            <Col sm={24} md={8} lg={6}>
              <DataItem>
                <DataTitle>Branch : </DataTitle>
                <Data>{profile.branch}</Data>
              </DataItem>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: "50px" }}>
            <Col sm={24} md={8} lg={6}>
              <DataItem>
                <DataTitle>Purpose : </DataTitle>
                <Data>{profile.purpose}</Data>
              </DataItem>
            </Col>
            <Col sm={24} md={8} lg={6}>
              <DataItem>
                <DataTitle>Weight : </DataTitle>
                <Data>{profile.weight}</Data>
              </DataItem>
            </Col>
            <Col sm={24} md={8} lg={6}>
              <DataItem>
                <DataTitle>Height : </DataTitle>
                <Data>{profile.height}</Data>
              </DataItem>
            </Col>
            <Col sm={24} md={8} lg={6}>
              <DataItem>
                <DataTitle>Other Info : </DataTitle>
                <Data>{profile.otherInfo}</Data>
              </DataItem>
            </Col>
          </Row>
        </ProfileContent>
      ) : (
        <FormContainer>
          <CustomForm>
            <Row gutter={24}>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <FormItem>
                  <Label>Full Name</Label>
                  <InputFelid
                    name="fullName"
                    onChange={handleOnChange}
                    value={profile.fullName}
                  />
                </FormItem>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <FormItem>
                  <Label>Birthday</Label>
                  <CustomDatePicker
                    name="dob"
                    onChange={handleOnChangeDatePicker}
                    value={profile.dob}
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
                      setProfile({ ...profile, gender: value });
                    }}
                    value={profile.gender}
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
                      setProfile({ ...profile, branch: value });
                    }}
                    value={profile.branch}
                  />
                </FormItem>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <FormItem>
                  <Label>Mobile</Label>
                  <InputFelid
                    name="mobile"
                    onChange={handleOnChange}
                    value={profile.mobile}
                  />
                </FormItem>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <FormItem>
                  <Label>Email</Label>
                  <InputFelid
                    name="email"
                    onChange={handleOnChange}
                    value={profile.email}
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
                    value={profile.nic}
                  />
                </FormItem>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <FormItem>
                  <Label>Other Info</Label>
                  <InputFelid
                    name="otherInfo"
                    onChange={handleOnChange}
                    value={profile.otherInfo}
                  />
                </FormItem>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <FormItem>
                  <Label>Height</Label>
                  <InputFelid
                    name="height"
                    onChange={handleOnChange}
                    value={profile.height}
                  />
                </FormItem>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <FormItem>
                  <Label>Weight</Label>
                  <InputFelid
                    name="weight"
                    onChange={handleOnChange}
                    value={profile.weight}
                  />
                </FormItem>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <FormItem>
                  <Label>City</Label>
                  <InputFelid
                    name="city"
                    onChange={handleOnChange}
                    value={profile.city}
                  />
                </FormItem>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <FormItem>
                  <Label>Preference</Label>
                  <CheckBoxes
                    value={profile.purpose}
                    options={preferenceOptions}
                    onChange={(value) =>
                      setProfile({ ...profile, purpose: value })
                    }
                  />
                </FormItem>
              </Col>
            </Row>

            <FormItem style={{ alignItems: "center" }}>
              <RegisterButton
                type="primary"
                htmlType="submit"
                onClick={handleUpdate}
              >
                UPDATE
              </RegisterButton>
            </FormItem>
          </CustomForm>
        </FormContainer>
      )}
    </Container>
  );
};

export default Profile;
