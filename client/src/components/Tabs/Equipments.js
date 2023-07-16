import React, { useState } from "react";
import {
  AddButton,
  ButtonContainer,
  Container,
  CreateButton,
  CustomTable,
  FormContainer,
} from "./style";
import { CustomForm, FormItem, InputFelid, Label } from "./style";
import { Col, Row } from "antd";
import { addEquipment } from "../../actions/EquipmentAction";
const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const Equipments = () => {
  const [addEquip, setAddEquip] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    totalCount: "",
    availableCount: "",
    description: "",
  });

  const handleCreate = () => {
    addEquipment(inputs);
    clearForm();
  };

  const clearForm = () => {
    setInputs({
      name: "",
      totalCount: "",
      availableCount: "",
      description: "",
    });
  };
  const handleOnChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  return (
    <Container>
      <ButtonContainer>
        {addEquip ? (
          <AddButton onClick={() => setAddEquip(false)}>
            VIEW EQUIPMENTS
          </AddButton>
        ) : (
          <AddButton onClick={() => setAddEquip(true)}>
            ADD EQUIPMENTS
          </AddButton>
        )}
      </ButtonContainer>
      {!addEquip ? (
        <CustomTable dataSource={dataSource} columns={columns} />
      ) : (
        <FormContainer>
          <CustomForm>
            <Row gutter={24} style={{ gap: "30px" }}>
              <Col span={24}>
                <FormItem>
                  <Label>Name</Label>
                  <InputFelid
                    name="name"
                    onChange={handleOnChange}
                    value={inputs.name}
                  />
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem>
                  <Label>Total Count</Label>
                  <InputFelid
                    name="totalCount"
                    onChange={handleOnChange}
                    value={inputs.totalCount}
                  />
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem>
                  <Label>Available Count</Label>
                  <InputFelid
                    name="availableCount"
                    onChange={handleOnChange}
                    value={inputs.availableCount}
                  />
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem>
                  <Label>Description</Label>
                  <InputFelid
                    name="description"
                    onChange={handleOnChange}
                    value={inputs.description}
                  />
                </FormItem>
              </Col>

              <FormItem style={{ alignItems: "flex-end" }}>
                <CreateButton
                  type="primary"
                  htmlType="submit"
                  onClick={handleCreate}
                >
                  SUBMIT
                </CreateButton>
              </FormItem>
            </Row>
          </CustomForm>
        </FormContainer>
      )}
    </Container>
  );
};

export default Equipments;
