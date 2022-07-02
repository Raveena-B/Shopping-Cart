import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewPromotions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () =>
      await axios.get("/trader-promotion").then((res) => {
        setData(res.data);
      }))();
  }, []);

  return (
    <div>
      <br />
      <br />
      <center>
        <h1>Promotions ...</h1>
        <table border="1">
          <tr>
            <th>Promotion Name</th>
            <th>Discount Rate</th>
            <th>Price</th>
          </tr>
          {data.map((value) => (
            <tr key={value?.promotionName}>
              <td> {value?.promotionName}</td>
              <td>{value?.discountRate}</td>
              <td>{value?.price}</td>
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
};

export default ViewPromotions;
