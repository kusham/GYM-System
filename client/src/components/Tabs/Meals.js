import React, { useState } from "react";
import { Container, CustomSelect, FormItem, InputFelid, Label } from "./style";
import { Button, Col, Row, Tag } from "antd";
import { calAge, calCalory } from "../utils/CalculateCalery";
const options = [
  { label: "Sedentary", value: "Sedentary" },
  { label: "Lightly active", value: "Lightly active" },
  { label: "Moderately active", value: "Moderately active" },
  { label: "Very active", value: "Very active" },
  { label: "Extra active", value: "Extra active" },
];
const Meals = () => {
  const user = JSON.parse(sessionStorage.getItem("profile"));
  const [input, setInput] = useState("");
  const [calVal, setCalVal] = useState("");
  const handleCalCalory = () => {
    setCalVal(
      calCalory(user.gender, user.dob, user.weight, user.height, input)
    );
  };
  return (
    <Container style={{ padding: "0px 100px" }}>
      <Row gutter={48}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem>
            <Label>Weight</Label>
            <InputFelid
              disabled
              style={{ background: "white" }}
              name="weight"
              value={user.weight + " kg"}
            />
          </FormItem>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem>
            <Label>Height</Label>
            <InputFelid
              disabled
              style={{ background: "white" }}
              name="height"
              value={user.height + " cm"}
            />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={48}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem>
            <Label>Age</Label>
            <InputFelid
              disabled
              style={{ background: "white" }}
              name="age"
              value={calAge(user.dob) + " years"}
            />
          </FormItem>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem>
            <Label>Gender</Label>
            <InputFelid
              disabled
              style={{ background: "white" }}
              name="gender"
              value={user.gender}
            />
          </FormItem>
        </Col>
      </Row>
      <Row justify="center" align="center">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <FormItem>
              <Label>Active Level</Label>
              <CustomSelect
                options={options}
                onChange={(value) => {
                  setInput(value);
                }}
                value={input}
              />
            </FormItem>
          </Col>
          <Button disabled={!input} onClick={handleCalCalory}>
            Calculate
          </Button>
          <Button
            onClick={() => {
              setInput("");
              setCalVal("");
            }}
          >
            Clear
          </Button>
        </div>
        {calVal && (
          <Tag
            style={{
              color: "white",
              background: "orange",
              padding: "20px 40px",
              fontSize: "20px",
              marginTop: "20px",
            }}
          >
            {calVal} cal
          </Tag>
        )}
      </Row>
    </Container>
  );
};

export default Meals;
