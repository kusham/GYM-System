import { Descriptions, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { AssignButton, CustomModalSelect, ModalSelectWrapper } from "../style";
import {
  assignTrainer,
  getTrainers,
} from "../../../actions/AuthActions";

const MemberModal = ({ isModalOpen, onOk, member }) => {
  const [instructors, setInstructors] = useState([]);
  const [inputValue, setInputValue] = useState(null);

  const fetchData = async () => {
    setInstructors(await getTrainers());
  };
  const handleAssign = async () => {
    const res = await assignTrainer(member?.userID, inputValue);
    if (res) {
      setInputValue(null);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Modal
      title="Member Details"
      cancelButtonProps={{ style: { display: "none" } }}
      open={isModalOpen}
      onOk={onOk}
      width={800}
    >
      <Descriptions title={member?.fullName}>
        <Descriptions.Item label="UserID">{member?.userID}</Descriptions.Item>
        <Descriptions.Item label="Email">{member?.email}</Descriptions.Item>
        <Descriptions.Item label="NIC">{member?.nic}</Descriptions.Item>
        <Descriptions.Item label="UserRole">
          {member?.userRole}
        </Descriptions.Item>
        <Descriptions.Item label="Gender">
          {member?.gender ? member?.gender : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Mobile">
          {member?.mobile ? member?.mobile : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Trainer">
          {member?.instructor ? member?.instructor?.fullName : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Weight">
          {member?.weight ? member?.weight : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Height">
          {member?.height ? member?.height : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Birthday">
          {member?.dob ? new Date(member?.dob).toDateString() : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="City">
          {member?.city ? member?.city : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Branch">
          {member?.branch ? member?.branch : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Purpose">
          {member?.purpose ? member?.purpose : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Personal Info">
          {member?.personalInfo ? member?.personalInfo : "--"}
        </Descriptions.Item>
      </Descriptions>
      <ModalSelectWrapper>
        <CustomModalSelect
          placeholder="Assign Trainer"
          value={inputValue}
          onChange={(value) => {
            setInputValue(value);
          }}
        >
          {instructors?.map((item) => (
            <Select.Option key={item.userID} value={item.userID}>
              {item.fullName}
            </Select.Option>
          ))}
        </CustomModalSelect>
        <AssignButton disabled={!inputValue} onClick={handleAssign}>
          Assign
        </AssignButton>
      </ModalSelectWrapper>
    </Modal>
  );
};

export default MemberModal;
