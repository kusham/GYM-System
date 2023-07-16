import React, { useEffect, useState } from "react";
import { AddButton, ButtonContainer, Container, CustomTable, IconWrapper } from "./style";
import { getMembers } from "../../actions/AuthActions";
import { EditOutlined, EyeFilled } from "@ant-design/icons";
import MemberEdit from "./Edit/MemberEdit";
import dayjs from "dayjs";
const Members = ({ forceRender }) => {
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
    },
    {
      title: "NIC",
      dataIndex: "nic",
      key: "nic",
    },
    {
      title: "Birthday",
      dataIndex: "dob",
      render: (record) => {
        return new Date(record).toDateString();
      },
    },
    {
      title: "Actions",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <IconWrapper>
            <EyeFilled style={{ cursor: "pointer" }} />
            <EditOutlined
              onClick={() => {
                handleEditMember(record);
              }}
              style={{ cursor: "pointer" }}
            />
          </IconWrapper>
        );
      },
    },
  ];
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleEditMember = (member) => {
    member.dob = dayjs(member.dob);
    member.purpose = member.purpose.split(",");
    setMember(member);
    setEditMode(true);
  };
  const handleFetchData = async () => {
    setMembers(await getMembers());
  };
  useEffect(() => {
    handleFetchData();
  }, [forceRender, editMode]);
  return (
    <Container>
      {editMode ? (
        <>
          <ButtonContainer style={{justifyContent: "flex-start"}}>
            <AddButton onClick={() => setEditMode(false)}>BACK</AddButton>
          </ButtonContainer>
          <MemberEdit member={member} setEditMode={setEditMode} />
        </>
      ) : (
        <CustomTable dataSource={members} columns={columns} />
      )}
    </Container>
  );
};

export default Members;
