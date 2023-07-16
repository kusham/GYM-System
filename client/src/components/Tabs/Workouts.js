import React, { useEffect, useState } from "react";
import {
  AddButton,
  ButtonContainer,
  Container,
  CreateButton,
  CustomSelect,
  CustomTable,
  FormContainer,
} from "./style";
import { CustomForm, FormItem, InputFelid, Label } from "./style";
import { Col, Row } from "antd";
import { addWorkouts, getWorkouts } from "../../actions/WorkoutAction";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Main Goal",
    dataIndex: "mainGoal",
    key: "mainGoal",
  },
  {
    title: "Training Level",
    dataIndex: "trainingLevel",
    key: "trainingLevel",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
];
const Workouts = () => {
  const [addWorkout, setAddWorkout] = useState(false);
  const [workouts, setWorkout] = useState([]);
  const [inputs, setInputs] = useState({
    title: "",
    mainGoal: "",
    trainingLevel: "easy",
    type: "",
    duration: "",
    targetGender: "male",
    description: "",
  });

  const handleCreate = () => {
    addWorkouts(inputs);
    clearForm();
  };

  const clearForm = () => {
    setInputs({
      title: "",
      mainGoal: "",
      trainingLevel: "easy",
      type: "",
      duration: "",
      targetGender: "male",
      description: "",
    });
  };
  const handleOnChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleFetchData = async () => {
    setWorkout(await getWorkouts());
  };

  useEffect(() => {
    handleFetchData();
  }, [addWorkout]);
  return (
    <Container>
      <ButtonContainer>
        {addWorkout ? (
          <AddButton onClick={() => setAddWorkout(false)}>
            VIEW WORKOUTS
          </AddButton>
        ) : (
          <AddButton onClick={() => setAddWorkout(true)}>
            ADD WORKOUTS
          </AddButton>
        )}
      </ButtonContainer>
      {!addWorkout ? (
        <CustomTable dataSource={workouts} columns={columns} />
      ) : (
        <FormContainer>
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
                    defaultValue='male'
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
                    defaultValue='easy'
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
              <CreateButton
                type="primary"
                htmlType="submit"
                onClick={handleCreate}
              >
                SUBMIT
              </CreateButton>
            </FormItem>
          </CustomForm>
        </FormContainer>
      )}
    </Container>
  );
};

export default Workouts;
