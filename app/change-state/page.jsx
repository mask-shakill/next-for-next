"use client";
import React, { useState } from "react";

const ChangeState = () => {
  const [changeName, setChangeName] = useState("Shakil");
  const HandleChangeState = () => {
    const newChangeName = `Dev ${changeName}`;
    // const color = "text-green-400";
    setChangeName(newChangeName);
  };

  return (
    <div className="text-center mt-10 ">
      <h1>change state using use state.. {changeName}</h1>
      <button
        className="bg-blue-300 p-10 rounded-full"
        onClick={HandleChangeState}
      >
        Change name
      </button>
    </div>
  );
};

export default ChangeState;
