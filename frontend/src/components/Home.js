import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <center>
        <h1 style={{ color: "green" }}>
          <u>Welcome to Capital Mall</u>
        </h1>
        <br />
        <br />
        <center>
          <button
            onClick={() => history("/customer")}
            style={{ background: "#66CDDF" }}
          >
            Customer
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => history("/trader")}
            style={{ background: "#66DFBB" }}
          >
            Trader
          </button>
        </center>
        <br />
        <br />
        <img src="1.png" width={"800px"} height={"500px"} />
      </center>
    </div>
  );
};

export default Home;
