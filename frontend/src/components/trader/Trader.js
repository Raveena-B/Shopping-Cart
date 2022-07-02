import React from "react";
import { useNavigate } from "react-router-dom";

const Trader = () => {
  const history = useNavigate();

  return (
    <div>
      <center>
        <h1>Trader</h1>
        <button
          onClick={() => history("/createTraderProfile")}
          style={{ background: "#F7DC6F " }}
        >
          View Trader Profile
        </button>
        &nbsp;&nbsp;
        <button
          onClick={() => history("/addItem")}
          style={{ background: "#F7DC6F " }}
        >
          Add Item
        </button>
        &nbsp;&nbsp;
        <button
          onClick={() => history("/addPromotion")}
          style={{ background: "#F7DC6F " }}
        >
          Add Promotions
        </button>
        &nbsp;&nbsp;
        <button
          onClick={() => history("/viewPromotions")}
          style={{ background: "#F7DC6F " }}
        >
          View Promotions
        </button>
        &nbsp;&nbsp;
        <button
          onClick={() => history("/viewtradeItems")}
          style={{ background: "#F7DC6F " }}
        >
          View Items
        </button>
      </center>
    </div>
  );
};

export default Trader;
