import React from 'react'
import { CustomTab } from './style';

const AdminDashboard = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: `Summary`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `Members`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Trainers`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '4',
      label: `Equipments`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '5',
      label: `Register Members`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '6',
      label: `Register Trainers`,
      children: `Content of Tab Pane 3`,
    },
  ];
  
  return (
    <div>
      <CustomTab defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default AdminDashboard