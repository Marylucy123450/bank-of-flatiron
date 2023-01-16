import React, { useEffect, useState } from "react";
import NewTransaction from "./NewTransaction";
import SearchBar from "./SearchBar";
import AllAccountTransactionList from "./AllAccountTransactionList";

function Accounts() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/transactions?q=" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
      console.log(transaction);
  }, [query])
  function Search(e) {
    setQuery(e.target.value)
  }
  return (
    <div>
      <SearchBar handleSearch={Search} />
      <NewTransaction/>
      <AllAccountTransactionList transactions={transaction} />
    </div>
  );
}

export default Accounts;
