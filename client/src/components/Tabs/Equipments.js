import React, { useEffect, useState } from "react";
import {
  AddButton,
  ButtonContainer,
  Container,
  CreateButton,
  CustomTable,
  FormContainer,
  IconWrapper,
} from "./style";
import { EditOutlined, EyeFilled } from "@ant-design/icons";

import { CustomForm, FormItem, InputFelid, Label } from "./style";
import { Col, Row } from "antd";
import { addEquipment, getEquipment } from "../../actions/EquipmentAction";
import EquipmentModal from "./Modals/EquipmentModal";

const Equipments = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Total Count",
      dataIndex: "totalCount",
      key: "totalCount",
    },
    {
      title: "Available Count",
      dataIndex: "availableCount",
      key: "availableCount",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => {
        return (
          <IconWrapper>
            <EyeFilled
              onClick={() => {
                handleViewEquipment(record);
              }}
              style={{ cursor: "pointer" }}
            />
            <EditOutlined
              onClick={() => {
                handleEditEquipment(record);
              }}
              style={{ cursor: "pointer" }}
            />
          </IconWrapper>
        );
      },
    },
  ];
  const [addEquip, setAddEquip] = useState(false);
  const [equipments, setEquipments] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    totalCount: "",
    availableCount: "",
    description: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditEquipment = (equipment) => {

  };

  const handleViewEquipment = (equipment) => {
    setEquipment(equipment);
    setIsModalOpen(true);
  };
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

  const handleFetchData = async () => {
    setEquipments(await getEquipment());
  };

  useEffect(() => {
    handleFetchData();
  }, [addEquip]);
  
  const handleOk = () => {
    setIsModalOpen(false);
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
        <CustomTable dataSource={equipments} columns={columns} />
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
      <EquipmentModal isModalOpen={isModalOpen} onOk={handleOk} equipment={equipment} />
    </Container>
  );
};

export default Equipments;
