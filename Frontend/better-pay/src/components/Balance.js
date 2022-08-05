import React from "react";
import { currentUser } from "../DefaultData";
import "./css/Balance.css";

const Balance = () => {
  return (
    <div className="label-Balance">
      <p className="yourBalance">Your Balance</p>
      <p className="balanceAmount">
        $ {Number(currentUser.balance).toFixed(2)}
      </p>
    </div>
  );
};

export default Balance;
