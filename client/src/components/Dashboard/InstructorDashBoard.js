import React, { useState } from 'react'
import { CustomTab } from './style';
import Summary from '../Tabs/Summary';
import Members from '../Tabs/Members';
import Equipments from '../Tabs/Equipments';
import Workouts from '../Tabs/Workouts';
import AssignedWorkouts from '../Tabs/AssignedWorkouts';

const InstructorDashBoard = () => {
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
      label: `Members Assign to Me`,
      children: <Members forceRender={forceRender} trainerMode={true}/>,
    },
    {
      key: '4',
      label: `Equipments`,
      children: <Equipments />,
    },
    {
      key: '5',
      label: `Workouts`,
      children: <Workouts />,
    },
    {
      key: '6',
      label: `Assigned Workout`,
      children: <AssignedWorkouts forceRender={forceRender}/>
    },
    {
      key: '7',
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

export default InstructorDashBoard