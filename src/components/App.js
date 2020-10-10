import React from "react";

import Header from "./Header";
import Meaning from "./Meaning";
import PurchaseStone from "./PurchaseStone";
import Steps from "./Steps";

import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Meaning />
      <PurchaseStone />
      <Steps />
    </div>
  );
}

export default App;
