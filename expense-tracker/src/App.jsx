import { useState } from "react"; 
import Header from "./components/Header"; 
import Balance from "./components/Balance"; 
import TransactionList from "./components/TransactionList"; 
import AddTransaction from "./components/AddTransaction"; 
import TransactionCategory from "./components/TransactionCategory"; 
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="app">
        <Header />
        <Balance transactions={transactions} />
        <TransactionCategory transactions={transactions} />
        <TransactionList transactions={transactions} />
        <AddTransaction onAdd={addTransaction} />
    </div>
  );
}

export default App;