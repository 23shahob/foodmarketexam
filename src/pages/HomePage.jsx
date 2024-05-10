import React, { useState } from "react";
import LeftSide from "../components/LeftSide";
import MiddleSide from "../components/MiddleSide";
import RightSide from "../components/RightSide";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [type, setType] = useState("Dine In");
  return (
    <div className="relative flex">
      <LeftSide />
      <MiddleSide setType={setType} />
      <RightSide type={type} />
    </div>
  );
};

export default HomePage;
