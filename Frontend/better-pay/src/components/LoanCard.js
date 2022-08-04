import React from "react";
import { currentUser } from "../DefaultData";
import "./css/LoanCard.css";
const LoanCard = (props) => {
  //     if(props.type === 'taken' ){
  //         return <div c></div>
  //     }

  //   return <div>LoanCard

  //     </div>;
  if (props.type === "taken") {
    return (
      <div>
        <h2>Loans {props.type} out</h2>
        {currentUser.loansTaken.map((ele) => (
          <div className="entry">
            <div className="leftEntry">
              <p>Lender: {ele.lender}</p>
            </div>
            <p>Date: {ele.payDate}</p>
            <div className="rightEntry"></div>
          </div>
        ))}
      </div>
    );
  }
  return <div></div>;
};

export default LoanCard;
