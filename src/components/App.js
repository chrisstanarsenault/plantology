import React from "react";

import Header from "./Header";
import Meaning from "./Meaning";
import PurchaseStone from "./PurchaseStone";

import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Meaning />
      <PurchaseStone />
    </div>
  );
}

export default App;
