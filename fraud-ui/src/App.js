import React, { useState } from "react";
import axios from "axios";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [fraudResults, setFraudResults] = useState({});

  const uploadTransactions = async () => {
    await axios.post("http://127.0.0.1:5000/upload", {
      transactions: [
        { user_id: "U1", merchant: "M1", amount: 500, is_fraud: false },
        { user_id: "U2", merchant: "M2", amount: 2000, is_fraud: true },
      ],
    });
    alert("Transactions uploaded!");
  };

  const detectFraud = async () => {
    const res = await axios.get("http://127.0.0.1:5000/detect");
    setFraudResults(res.data);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Credit Card Fraud Detection</h1>
      <button onClick={uploadTransactions}>Upload Transactions</button>
      <button onClick={detectFraud}>Detect Fraud</button>
      <h2>Fraud Results:</h2>
      <pre>{JSON.stringify(fraudResults, null, 2)}</pre>
    </div>
  );
}

export default App;
