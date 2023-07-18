import React, { useState } from "react";
import { CustomSelect, EditContainer } from "../style";
import { CreateButton } from "../style";

import { CustomForm, FormItem, InputFelid, Label } from "../style";
import { Col, Row } from "antd";
import { updateWorkout } from "../../../actions/WorkoutAction";

const WorkoutEdit = ({ workout, setEditMode }) => {
  const [inputs, setInputs] = useState(workout);
  const handleUpdate = async () => {
    const res = await updateWorkout(inputs);
    if (res) {
      setEditMode(false);
    }
  };
  const handleOnChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  return (
    <EditContainer>
      <CustomForm>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Title</Label>
              <InputFelid
                name="title"
                onChange={handleOnChange}
                value={inputs.title}
              />
            </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Main Goal</Label>
              <InputFelid
                name="mainGoal"
                onChange={handleOnChange}
                value={inputs.mainGoal}
              />
            </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Duration</Label>
              <InputFelid
                name="duration"
                onChange={handleOnChange}
                value={inputs.duration}
              />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Target Gender</Label>
              <CustomSelect
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "both", label: "Both" },
                ]}
                defaultValue="male"
                onChange={(value) => {
                  setInputs({ ...inputs, targetGender: value });
                }}
                value={inputs.targetGender}
              />
            </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Type</Label>
              <InputFelid
                name="type"
                onChange={handleOnChange}
                value={inputs.type}
              />
            </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Training Level</Label>
              <CustomSelect
                options={[
                  { value: "easy", label: "Easy" },
                  { value: "medium", label: "Medium" },
                  { value: "hard", label: "Hard" },
                ]}
                defaultValue="easy"
                onChange={(value) => {
                  setInputs({ ...inputs, trainingLevel: value });
                }}
                value={inputs.trainingLevel}
              />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Description</Label>
              <InputFelid
                name="description"
                onChange={handleOnChange}
                value={inputs.description}
              />
            </FormItem>
          </Col>
        </Row>
        <FormItem style={{ alignItems: "flex-end" }}>
          <CreateButton type="primary" htmlType="submit" onClick={handleUpdate}>
            SUBMIT
          </CreateButton>
        </FormItem>
      </CustomForm>
    </EditContainer>
  );
};

export default WorkoutEdit;
