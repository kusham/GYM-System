import React, { useEffect, useState } from "react";
import { CustomTable, IconWrapper } from "./style";
import { Button } from "antd";
import {
  acceptRequestEquipment,
  getEquipment,
  getRequestEquipment,
  rejectRequestEquipment,
} from "../../actions/EquipmentAction";

const EquipmentRequest = ({ forceRender }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "element",
      render: (text, record) => {
        return record.element.id;
      },
    },
    {
      title: "Equipment",
      dataIndex: "equipment",
      key: "equipment",
    },
    {
      title: "Member",
      dataIndex: "member",
      key: "member",
    },
    {
      title: "Count",
      dataIndex: "count",
      render: (text, record) => {
        return record.element.count;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => {
        return record.element.status;
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => {
        return (
          <IconWrapper>
            <Button
              onClick={() => handleAccept(record.element)}
              style={{ background: "green" }}
            >
              Accept
            </Button>
            <Button
              onClick={() => handleReject(record.element)}
              style={{ background: "red" }}
            >
              Reject
            </Button>
          </IconWrapper>
        );
      },
    },
  ];
  const [requests, setRequests] = useState([]);
  const [rerender, setRerender] = useState(false);

  const handleFetchData = async () => {
    setRequests(await getRequestEquipment());
  };
  const handleAccept = async (record) => {
    acceptRequestEquipment(record);
    setRerender(!rerender);
  };
  const handleReject = async (record) => {
    rejectRequestEquipment(record);
    setRerender(!rerender);
  };

  useEffect(() => {
    handleFetchData();
  }, [forceRender, rerender]);
  return <CustomTable dataSource={requests} columns={columns} />;
};

export default EquipmentRequest;
