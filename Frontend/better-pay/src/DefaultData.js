const John = {
  id: 111,
  name: "John",
  minInterestRate: "1.1",
  balance: 500.5,
  rating: 5,
  credit: 700,
  username: "John",
  password: "password",
  friends: ["Mike", "Jess", "Kim"],
  loansTaken: [
    { amount: 1000, interest: 2.2, payDate: "08/06/2022", lender: "Mike" },
    { amount: 1500, interest: 1.8, payDate: "08/06/2022", lender: "Jess" },
  ],
  loansGiven: [
    { amount: 1000, interest: 2.2, payDate: "08/06/2022", borrower: "Mike" },
  ],
};

export const persons = [John];
export const currentUser = John;
