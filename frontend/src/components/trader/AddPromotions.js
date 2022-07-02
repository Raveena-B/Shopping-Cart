import React, { useState } from "react";
import axios from "axios";

const AddPromotions = () => {
  const [promotionName, setPromortionName] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const [price, setPrice] = useState("");

  const promotionHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/trader-promotion", {
        promotionName,
        discountRate,
        price,
      });
      alert("Successfully added Promotion");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <center>
        <form onSubmit={promotionHandler}>
          <br />
          <br />
          <h1>Add Promotions ..</h1>
          <br />
          <br />
          <label>Promotion Name: </label>
          <input
            type="text"
            name="promotionName"
            id="promotionName"
            value={promotionName}
            onChange={(e) => setPromortionName(e.target.value)}
            required
          />
          <br />
          <br />
          <label> Discount Rate: </label>
          <input
            type="text"
            name="discountRate"
            id="discountRate"
            value={discountRate}
            onChange={(e) => setDiscountRate(e.target.value)}
            required
          />
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<label>Price : </label>
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

export default AddPromotions;
