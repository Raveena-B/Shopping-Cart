import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Customer from "./components/customer/Customer";
import Trader from "./components/trader/Trader";
import CreateProfile from "./components/customer/CreateProfile";
import ViewCart from "./components/customer/ViewCart";
import ViewItems from "./components/customer/ViewItems";
import ViewCustomerProfile from "./components/trader/ViewCustomerProfile";

import CreateTraderProfile from "./components/trader/CreateProfile";
import AddItem from "./components/trader/AddItem";
import AddPromotions from "./components/trader/AddPromotions";
import EditItem from "./components/trader/EditItem";
import ViewPromotions from "./components/trader/ViewPromotions";
import ViewTradeItems from "./components/trader/ViewItems";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/createProfile" element={<CreateProfile />} />
          <Route path="/viewCart" element={<ViewCart />} />
          <Route path="/viewItems" element={<ViewItems />} />

          <Route
            path="/viewCustomerProfile"
            element={<ViewCustomerProfile />}
          />

          <Route path="/trader" element={<Trader />} />
          <Route
            path="/createTraderProfile"
            element={<CreateTraderProfile />}
          />
          <Route path="/addItem" element={<AddItem />} />
          <Route path="/addPromotion" element={<AddPromotions />} />
          <Route path="/editItem/:itemName" element={<EditItem />} />
          <Route path="/viewtradeItems" element={<ViewTradeItems />} />
          <Route path="/viewPromotions" element={<ViewPromotions />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
