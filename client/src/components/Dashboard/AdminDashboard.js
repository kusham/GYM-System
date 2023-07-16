import React from 'react'
import { CustomTab } from './style';
import Equipments from '../Tabs/Equipments';
import Trainers from '../Tabs/Trainers';
import Members from '../Tabs/Members';
import Member from '../Registration/Member';
import Trainer from '../Registration/Trainer';


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
      children: <Members />,
    },
    {
      key: '3',
      label: `Trainers`,
      children: <Trainers />,
    },
    {
      key: '4',
      label: `Equipments`,
      children: <Equipments />,
    },
    {
      key: '5',
      label: `Register Members`,
      children: <Member />,
    },
    {
      key: '6',
      label: `Register Trainers`,
      children: <Trainer />,
    },
  ];
  
  return (
    <div>
      <CustomTab defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default AdminDashboard