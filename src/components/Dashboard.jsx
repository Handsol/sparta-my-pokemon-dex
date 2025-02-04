import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      <DashboardContent></DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 200px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;

  background-color: #f1f3f5;
`;

const DashboardTitle = styled.h1`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  color: #333;
`;

const DashboardContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
