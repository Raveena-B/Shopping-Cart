import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewTradeItems = () => {
  const history = useNavigate();
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
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
          {data.map((value) => (
            <tr key={value?.itemName}>
              <td> {value?.itemName}</td>
              <td>{value?.quantity}</td>
              <td>{value?.price}</td>
              <td>
                <button
                  onClick={() => history(`/editItem/${value.itemName}`)}
                  style={{ background: "#F76D6D  " }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
};

export default ViewTradeItems;
