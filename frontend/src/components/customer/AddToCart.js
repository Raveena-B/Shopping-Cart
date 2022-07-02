import React from "react";

const AddToCart = () => {
  const addToCart = async (value) => {
    const itemName = value.itemName;
    const quantity = value.quantity;
    const price = value.price;

    try {
      await axios.post("/trader-Item/update", { itemName, quantity, price });
    } catch (error) {}
  };

  return <></>;
};

export default AddToCart;
