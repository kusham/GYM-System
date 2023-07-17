import { Descriptions, Modal } from "antd";
import React from "react";

const EquipmentModal = ({ isModalOpen, onOk, equipment }) => {
  return (
    <Modal
      title="Equipment Details"
      cancelButtonProps={{ style: { display: "none" } }}
      open={isModalOpen}
      onOk={onOk}
      width={800}
    >
      <Descriptions title={equipment?.name}>
        <Descriptions.Item label="Total Count">
          {equipment?.totalCount ? equipment?.totalCount : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Available Count">
          {equipment?.availableCount ? equipment?.availableCount : "--"}
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {equipment?.description ? equipment?.description : "--"}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default EquipmentModal;
