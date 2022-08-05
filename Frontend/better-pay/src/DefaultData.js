let currId = 6;
const John = {
  id: 111,
  name: "John",
  minInterestRate: "1.1",
  balance: 5000.5,
  rating: 5,
  credit: 700,
  username: "John",
  password: "password",
  friends: ["Mike", "Jess", "Kim", "Mary", "Anne"],
  loansTaken: [
    {
      amount: 1000,
      interest: 2.2,
      payDate: "08/07/2022",
      lender: "Mike",
      id: 1,
    },
    {
      amount: 1500,
      interest: 1.8,
      payDate: "08/06/2022",
      lender: "Jess",
      id: 2,
    },
  ],
  loansGiven: [
    {
      amount: 1000,
      interest: 2.2,
      payDate: "08/01/2022",
      borrower: "Kim",
      id: 3,
    },
  ],
  pendingLoans: [
    {
      type: "borrower",
      amount: 200,
      interest: 1.2,
      payDate: "09/07/2022",
      name: "Mary",
      id: 4,
    },
    {
      type: "borrower",
      amount: 400,
      interest: 11.2,
      payDate: "09/011/2022",
      name: "Mike",
      id: 5,
    },
    {
      type: "borrower",
      amount: 2,
      interest: 1.2,
      payDate: "09/07/2023",
      name: "Yin",
      id: 9,
    },
    {
      type: "borrower",
      amount: 200,
      interest: 1.2,
      payDate: "09/07/2022",
      name: "Maria",
      id: 10,
    },
    {
      type: "lender",
      amount: 250,
      interest: 0.1,
      payDate: "09/03/2022",
      name: "Mary",
      id: 8,
    },
  ],
};

export const persons = [John];
export const currentUser = John;
