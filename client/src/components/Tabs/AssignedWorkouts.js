import React, { useEffect, useState } from "react";
import { Container, CustomTable, IconWrapper } from "./style";
import { EyeFilled } from "@ant-design/icons";
import { getWorkoutEventsByInstructor, getWorkoutEventsByMember } from "../../actions/WorkoutEventAction";
import EventModal from "./Modals/EventModal";
import { userRoles } from "../../resources/UserRoles";

const AssignedWorkouts = ({ forceRender }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "element",
      render: (text) => {
        return text?.id;
      },
    },
    {
      title: "Member Name",
      dataIndex: "member",
      render: (text) => {
        return text;
      },
    },
    {
      title: "Equipment Name",
      dataIndex: "equipment",
      render: (text) => {
        return text;
      },
    },
    {
      title: "Workout",
      dataIndex: "workout",
      render: (text) => {
        return text;
      },
    },
    {
      title: "Sessions",
      dataIndex: "element",
      render: (text) => {
        return text?.numberOfSessions;
      },
    },
    {
        title: "Completed Sessions",
        dataIndex: "element",
        render: (text) => {
          return text?.completedSessions === null ? 0 : text?.completedSessions;
        },
      },
    {
      title: "Actions",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <IconWrapper>
            <EyeFilled
              onClick={() => {
                handleViewTrainer(record);
              }}
              style={{ cursor: "pointer" }}
            />
          </IconWrapper>
        );
      },
    },
  ];

  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("profile"));

  const handleFetchData = async () => {
    if(userRoles.INSTRUCTOR === user?.userRole) {
      setEvents(await getWorkoutEventsByInstructor());
    } else if (userRoles.MEMBER === user?.userRole) {
      setEvents(await getWorkoutEventsByMember())
    }
  };
  const handleViewTrainer = (event) => {
    setEvent(event);
    setIsModalOpen(true);
  };

  useEffect(() => {
    handleFetchData();
  }, [forceRender, isModalOpen]);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <CustomTable dataSource={events} columns={columns} />
      <EventModal
        isModalOpen={isModalOpen}
        onOk={handleOk}
        event={event}
      />
    </Container>
  );
};

export default AssignedWorkouts;
