import { Checkbox, Descriptions, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import {
  AssignButton,
  CheckBoxes,
  MakingTitle,
  MarkingContainer,
} from "../style";
import { markAttendance } from "../../../actions/WorkoutEventAction";

const EventModal = ({ isModalOpen, onOk, event }) => {
  const [checkedValues, setCheckedValues] = useState([]);
  const checkboxOptions = () => {
    return Array.from(
      { length: event?.element?.numberOfSessions },
      (_, index) => index
    );
  };
  const handleOnChange = (value) => {
    setCheckedValues(value);
  };
  useEffect(() => {
    setCheckedValues(
      Array.from(
        { length: event?.element?.completedSessions },
        (_, index) => index
      )
    );
  }, [isModalOpen]);

  const clear = () => {
    setCheckedValues([]);
  };

  const handleAttendance = () => {
    const newValue = event?.element;
    if (newValue.completedSessions === null) {
      newValue.completedSessions = checkedValues.length;
    } else {
      newValue.completedSessions = checkedValues.length;
    }
    markAttendance(event?.element?.id, newValue);
    // clear();
    // onOk();
  };
  return (
    <Modal
      title="Workout Event Details"
      cancelButtonProps={{ style: { display: "none" } }}
      open={isModalOpen}
      onOk={() => {
        onOk();
        clear();
      }}
      width={800}
      onCancel={() => {
        onOk();
        clear();
      }}
    >
      <Descriptions title={event?.title}>
        <Descriptions.Item label="Equipment">
          {event?.equipment ? event?.equipment : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Member Full Name">
          {event?.member ? event?.member : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Workout">
          {event?.workout ? event?.workout : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {event?.description ? event?.description : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Sessions">
          {event?.element?.numberOfSessions
            ? event?.element?.numberOfSessions
            : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Completed Sessions">
          {event?.element?.completedSessions
            ? event?.element?.completedSessions
            : "0"}
        </Descriptions.Item>
      </Descriptions>
      <MarkingContainer>
        <MakingTitle>Mark Attendance</MakingTitle>
        <Row>
          <CheckBoxes onChange={handleOnChange} value={checkedValues}>
            {checkboxOptions().map((option, index) => (
              <Checkbox key={index} value={option}></Checkbox>
            ))}
          </CheckBoxes>
        </Row>
        <Row justify={"end"}>
          <AssignButton onClick={handleAttendance}>Update</AssignButton>
        </Row>
      </MarkingContainer>
    </Modal>
  );
};

export default EventModal;
