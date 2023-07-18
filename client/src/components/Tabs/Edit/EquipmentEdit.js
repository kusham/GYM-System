import React, { useState } from "react";
import { EditContainer } from "../style";
import { CreateButton } from "../style";

import { CustomForm, FormItem, InputFelid, Label } from "../style";
import { Col, Row } from "antd";
import { updateEquipment } from "../../../actions/EquipmentAction";
const EquipmentEdit = ({ equipment, setEditMode }) => {
  const [inputs, setInputs] = useState(equipment);
  const handleUpdate = async () => {
    const res = await updateEquipment(inputs);
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
                onClick={handleUpdate}
              >
                SUBMIT
              </CreateButton>
            </FormItem>
          </Row>
        </CustomForm>
    </EditContainer>
  );
};

export default EquipmentEdit;
