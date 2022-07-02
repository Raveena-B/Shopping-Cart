const cart = new Map();

//create route

const createCart = ({ itemName, date }) => {
  const _cart = { itemName, date };
  profile.set(_cart.itemName, _cart);
};

//get route

const getCart = () => {
  return [...cart.values()];
};

module.exports = { createCart, getCart };

//update route
