const John = {
  id: 111,
  name: "John",
  minInterestRate: "1.1",
  rating: 5,
  credit: 700,
  username: "John",
  password: "password",
  friends: ["Mike", "Jess", "Kim"],
  loansTaken: [
    { amount: 1000, interest: 2.2, payDate: new Date(), lender: "Mike" },
    { amount: 1500, interest: 1.8, payDate: new Date(), lender: "Jess" },
  ],
  loansGiven: [
    { amount: 1000, interest: 2.2, payDate: new Date(), borrower: "Mike" },
  ],
};

const persons = [John];
