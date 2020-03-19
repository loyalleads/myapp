import React, {useReducer} from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpances } from "./components/IncomeExpances";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import "./App.css";
const [] =useReducer();

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpances />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;