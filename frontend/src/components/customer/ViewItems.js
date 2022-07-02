import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewItems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () =>
      await axios.get("/trader-Item").then((res) => {
        setData(res.data);
      }))();
  }, []);

  return (
    <div>
      <br />
      <br />
      <center>
        <h1>Items .. </h1>
        <br />
        <br />
        <table border="1px">
          <tr style={{ border: "1px" }}>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
          {data.map((value) => (
            <tr key={value?.itemName}>
              <td> {value?.itemName}</td>
              <td>{value?.quantity}</td>
              <td>{value?.price}</td>
              <td>
                <button
                  style={{ background: "#C3F76D" }}
                  onClick={() => addToCart(value)}
                >
                  Add to Cart
                </button>
              </td>
              <td>
                <button style={{ background: "#C3F76D" }}>
                  Add to Wish List
                </button>
              </td>
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
};

export default ViewItems;
