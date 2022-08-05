import React, { useState } from "react";
import Balance from "./Balance";
import "./css/DashboardTop.css";
import LoanCard from "./LoanCard";
const DashboardTop = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      className="mainContentU"
      onClick={() => {
        setCount(count + 1);
        console.log("clicked" + count);
      }}
    >
      <Balance />
      <div className="cards">
        <LoanCard type="taken" />

        <LoanCard type="given" count="count" />
        <LoanCard type="pending" />
      </div>
    </div>
  );
};

export default DashboardTop;
