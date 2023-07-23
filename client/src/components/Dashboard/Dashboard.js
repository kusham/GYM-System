import React from "react";
import { RootContainer, UserName } from "./style";
import { userRoles } from "../../resources/UserRoles";
import AdminDashboard from "./AdminDashboard";
import InstructorDashBoard from "./InstructorDashBoard";
import MemberDashboard from "./MemberDashboard";

const Dashboard = ({ userRole }) => {
  const user = JSON.parse(sessionStorage.getItem("profile"));

  const renderDashboard = () => {
    switch (userRole) {
      case userRoles.ADMIN:
        return <AdminDashboard />;
      case userRoles.INSTRUCTOR:
        return <InstructorDashBoard />;
      case userRoles.MEMBER:
        return <MemberDashboard />;
      default:
        return <h1>Not Found</h1>;
    }
  };
  return (
    <RootContainer>
      <UserName>Welcome, <span>{user?.fullName}</span><p>({user?.userRole})</p></UserName>
      {renderDashboard()}
    </RootContainer>
  );
};

export default Dashboard;
