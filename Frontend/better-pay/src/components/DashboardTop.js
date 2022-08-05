import React from "react";
import Balance from "./Balance";
// /import "./css/DashboardTop";
import LoanCard from "./LoanCard";
const DashboardTop = () => {
  return (
    <div className="mainContent">
      <Balance />
      <div className="card">
        <LoanCard type="taken" />

        <LoanCard type="given" />
      </div>
    </div>
  );
};

export default DashboardTop;
