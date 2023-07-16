import React from "react";
import { RootContainer } from "./style";
import { userRoles } from "../../resources/UserRoles";
import AdminDashboard from "./AdminDashboard";
import InstructorDashBoard from "./InstructorDashBoard";
import MemberDashboard from "./MemberDashboard";

const Dashboard = ({ userRole }) => {

  const renderDashboard = () => {
    switch (userRole) {
      case userRoles.ADMIN:
        return <AdminDashboard />;
      case userRoles.INSTRUCTOR:
        <InstructorDashBoard />;
        return;
      case userRoles.MEMBER:
        <MemberDashboard />;
        return;
      default:
        return <h1>Not Found</h1>;
    }
  };
  return <RootContainer>{renderDashboard()}</RootContainer>;
};

export default Dashboard;
