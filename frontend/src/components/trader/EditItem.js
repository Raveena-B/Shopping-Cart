import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditItem = () => {
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const name = useParams();
  const itemName = name.itemName;

  useEffect(() => {
    (async () =>
      await axios.get(`/trader-Item/${name.itemName}`).then((res) => {
        setQuantity(res?.data?.[0]?.quantity);
        setPrice(res?.data?.[0]?.price);
      }))();
  }, []);

  const updateItemHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/trader-Item/update/${name.itemName}`, {
        itemName,
        quantity,
        price,
      });
      alert("Item Updated Successfully");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <center>
        <br />
        <h1>Edit Items ...</h1>
        <form onSubmit={updateItemHandler}>
          <br />
          <br />
          <label> Quantity : </label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          <br />
          <br />
          <label>Price : </label>
          <input
            type="text"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            style={{ background: "#96BBF3  " }}
          />
        </form>
      </center>
    </div>
  );
};

export default EditItem;
