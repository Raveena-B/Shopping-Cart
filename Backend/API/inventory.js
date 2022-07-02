const inventory = new Map();

//get route

const getInventory = () => {
  return [...inventory.values()];
};

module.exports = getInventory;
