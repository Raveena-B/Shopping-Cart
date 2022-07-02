import React, { useState } from "react";
import axios from "axios";

const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const profileHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/trader-Item", {
        itemName,
        quantity,
        price,
      });
      alert("Successfully added Item");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <center>
        <form onSubmit={profileHandler}>
          <br />
          <br />
          <h1>Add Items ..</h1>
          <br />
          <br />
          <label>Item Name : </label>
          <input
            type="text"
            name="itemName"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
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
          <label> Price : </label>
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

export default AddItem;
