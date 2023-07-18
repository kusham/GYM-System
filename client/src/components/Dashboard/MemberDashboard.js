import React, { useState } from 'react'
import Summary from '../Tabs/Summary';
import Members from '../Tabs/Members';
import Equipments from '../Tabs/Equipments';
import Workouts from '../Tabs/Workouts';
import { CustomTab } from './style';
import AssignedWorkouts from '../Tabs/AssignedWorkouts';

const MemberDashboard = () => {
  const [forceRender, setForceRender] = useState(false);
  const onChange = (key) => {
    console.log(key);
    setForceRender(!forceRender);
  };
  const items = [
    {
      key: '1',
      label: `Summary`,
      children: <Summary forceRender={forceRender}/>
    },
    {
      key: '2',
      label: `All Members`,
      children: <Members forceRender={forceRender}/>,
    },
    {
      key: '3',
      label: `Equipments`,
      children: <Equipments />,
    },
    {
      key: '4',
      label: `Workouts`,
      children: <Workouts />,
    },
    {
      key: '5',
      label: `Assigned Workout`,
      children: <AssignedWorkouts forceRender={forceRender}/>
    },
    {
      key: '6',
      label: `Profile`,
      children: 'profile'
    },
  ];
  return (
    <div>
      <CustomTab defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default MemberDashboard