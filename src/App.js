import React from "react";
// import Customer from "./Tables/Customer/Customer";
import Customer2 from "../src/Tables/Customer/Customer2";
import Diocese from "./Tables/Diocese/Diocese";
import Distinv from "./Tables/Distributor Invoice Master/Distinv";
import Distinvtxn from "./Tables/Distributor Invoice Txn/Distinvtxn";
import Distributor from "./Tables/Distributor master/Distributor";
import Dpa from "./Tables/Distributor Payment Allocation/Dpa";
import Dpm from "./Tables/Distributor Payment Master/Dpm";
import Product from "./Tables/Product master/Product";
import Supplier from "./Tables/Supplier Master/Supplier";
import Vat from "./Tables/Vat Master/Vat";

const App = () => {
  return (
    <div>
      <Customer2 />
      <Product />
      <Vat />
      <Supplier />
      <Distributor />
      <Diocese />
      <Distinv />
      <Distinvtxn />
      <Dpm />
      <Dpa />
    </div>
  );
};

export default App;
