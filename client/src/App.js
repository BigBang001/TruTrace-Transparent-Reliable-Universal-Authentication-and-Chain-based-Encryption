import React, { useEffect } from "react";
import { loadWeb3, contract } from "./web3";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import "./App.css";

function App() {
  useEffect(() => {
    loadWeb3();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>TruTrace - Supply Chain Verification</h1>
      <ProductForm />
    </div>
  );
}

export default App;
