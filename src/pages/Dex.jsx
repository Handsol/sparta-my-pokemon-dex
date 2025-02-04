import React from "react";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";

const Dex = () => {
  return (
    <DexContainer>
      <Dashboard />
    </DexContainer>
  );
};

export default Dex;

const DexContainer = styled.div`
  margin: 0;
  padding: 10px;

  background-color: #ffffcc;
  height: 100vh;
  width: 100vw;
`;
