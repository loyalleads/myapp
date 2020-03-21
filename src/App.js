import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpances } from "./components/IncomeExpances";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { ToDo } from "./components/ToDo";

import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpances />
        <TransactionList />
        <AddTransaction />
        <ToDo />
      </div>
    </div>
  );
}

export default App;
