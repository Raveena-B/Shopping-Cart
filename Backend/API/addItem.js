const Item = new Map();

//create route

const addItem = ({ itemName, quantity, price }) => {
  console.log(itemName, quantity, price);
  const _Item = { itemName, quantity, price };
  Item.set(_Item.itemName, _Item);
};

//get route

const getItem = () => {
  return [...Item.values()];
};

const getItemById = (id) => {
  return Item.get(id);
};

const updateItemById = (id, { itemName, quantity, price }) => {
  Item.set(id, { itemName, quantity, price });
};

module.exports = { addItem, getItem, getItemById, updateItemById };
