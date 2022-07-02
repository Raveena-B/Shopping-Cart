import React from "react";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const history = useNavigate();
  return (
    <div>
      <br />
      <br />

      <center>
        <h1>Customer</h1>
        <br />
        <button
          onClick={() => history("/createProfile")}
          style={{ background: "#F7DC6F " }}
        >
          Create Profile
        </button>
        &nbsp; &nbsp;
        {/* <button
          onClick={() => history("/viewCart")}
          style={{ background: "#F7DC6F " }}
        >
          View Cart
        </button> */}
        &nbsp; &nbsp; &nbsp;
        <button
          onClick={() => history("/viewItems")}
          style={{ background: "#F7DC6F " }}
        >
          View Items
        </button>
        {/* &nbsp; &nbsp;
        <button
          onClick={() => history("/viewWishList")}
          style={{ background: "#F7DC6F " }}
        >
          View Wish List
        </button>
        &nbsp; &nbsp; */}
      </center>
    </div>
  );
};

export default Customer;
