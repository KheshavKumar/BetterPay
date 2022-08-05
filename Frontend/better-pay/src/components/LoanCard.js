import React, { useState, useEffect } from "react";
import { currentUser } from "../DefaultData";
import "./css/LoanCard.css";

function addLoan(entry) {
  console.log(currentUser.pendingLoans);
  currentUser.pendingLoans = currentUser.pendingLoans.filter(
    (ele) => ele.id != entry.id
  );

  const data = {
    borrower: entry.name,
    amount: entry.amount,
    interest: entry.interest,
    payDate: entry.payDate,
    id: entry.id,
  };
  currentUser.balance -= entry.amount;

  //currentUser.pendingLoans = [...currentUser.pendingLoans];
  currentUser.loansGiven.push(data);
  //currentUser.loansGiven = [...currentUser.pendingLoans];
  console.log(currentUser.pendingLoans);
  console.log(currentUser.loansGiven);
}

function denyLoan(entry) {
  console.log(currentUser.pendingLoans);
  currentUser.pendingLoans = currentUser.pendingLoans.filter(
    (ele) => ele.id != entry.id
  );

  //   const data = {
  //     borrower: entry.name,
  //     amount: entry.amount,
  //     interest: entry.interest,
  //     payDate: entry.payDate,
  //     id: entry.id,
  //   };
  //   currentUser.balance -= entry.amount;

  //currentUser.pendingLoans = [...currentUser.pendingLoans];
  //currentUser.loansGiven.push(data);
  //currentUser.loansGiven = [...currentUser.pendingLoans];
  console.log(currentUser.pendingLoans);
}

const LoanCard = (props) => {
  //     if(props.type === 'taken' ){
  //         return <div c></div>
  //     }

  //   return <div>LoanCard

  //     </div>;

  let [loansGiven, setGivenLoans] = useState(currentUser.loansGiven);
  let [pendingLoans, setPendingLoans] = useState(currentUser.pendingLoans);
  let [count, setProps] = useState(props.count);
  //   useEffect(() => {
  //     currentUser.pendingLoans = [...currentUser.pendingLoans];
  //     currentUser.loansGiven = [...currentUser.loansGiven];
  //   }, [pendingLoans, currentUser.pendingLoans]);
  if (props.type === "taken") {
    return (
      <div className="cardUni">
        <h2 className="h2Kheshav">
          Loans <span style={{ color: "#A73333" }}>{props.type}</span> out
        </h2>

        {currentUser.loansTaken.map((ele, i) => (
          <div className="entry" key={ele.id}>
            <div className="leftEntry">
              <p className="pKheshav">Lender: {ele.lender}</p>
              <p className="pKheshav">Due by: {ele.payDate}</p>
            </div>

            <div className="rightEntry">
              <p className="pKheshav">
                ${ele.amount} w/ {ele.interest}%
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (props.type === "given") {
    return (
      <div className="cardUni">
        <h2 className="h2Kheshav">
          Loans <span style={{ color: "#3367A7" }}>{props.type}</span> out
        </h2>

        {loansGiven.map((ele, i) => (
          <div className="entry" key={ele.id}>
            <div className="leftEntry">
              <p className="pKheshav">Borrower: {ele.borrower}</p>
              <p className="pKheshav">Due by: {ele.payDate}</p>
            </div>

            <div className="rightEntry">
              <p className="pKheshav">
                ${ele.amount} w/ {ele.interest}%
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="cardUni">
      <h2 className="h2Kheshav">
        Loans <span style={{ color: "orange" }}>{props.type}</span>
      </h2>

      {pendingLoans.map((ele, i) => (
        <div className="entriesContainer">
          {ele.type === "borrower" && (
            <h3 style={{ color: "#3367A7" }}>Incoming request</h3>
          )}
          {ele.type === "lender" && (
            <h3 style={{ color: "#A73333" }}>Outgoing request</h3>
          )}
          <div className="entry" key={ele.id}>
            <div className="leftEntry">
              {ele.type === "borrower" && <p className="pKheshav">Borrower: {ele.name}</p>}
              {ele.type === "lender" && <p className="pKheshav">Lender: {ele.name}</p>}
              <p className="pKheshav">Due by: {ele.payDate}</p>
            </div>

            <div className="rightEntry">
              <p className="pKheshav">
                ${ele.amount} w/ {ele.interest}%
              </p>
              {ele.type === "borrower" && (
                <div className="Buttons">
                  <button
                    className="btn offerAccepted"
                    onClick={() => {
                      addLoan(ele);
                      //   console.log(currentUser.pendingLoans);
                      //   console.log(currentUser.loansGiven);
                      setPendingLoans([...currentUser.pendingLoans]);
                      setGivenLoans([...currentUser.loansGiven]);
                      setProps(count + 1);
                    }}
                  >
                    ✅
                  </button>{" "}
                  <button
                    className="btn offerDenied"
                    onClick={() => {
                      denyLoan(ele);
                      setPendingLoans([...currentUser.pendingLoans]);
                      setProps(count + 1);
                    }}
                  >
                    ❌
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoanCard;
