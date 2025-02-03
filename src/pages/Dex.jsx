import React from "react";
import { useNavigate } from "react-router-dom";

const Dex = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dex 컴포넌트입니다.</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Dex로 이동
      </button>
    </div>
  );
};

export default Dex;
