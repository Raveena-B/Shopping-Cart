const wishList = new Map();

//create route

const createWishList = ({ name, age, gender }) => {
  const _wishList = { name, age, gender };
  wishList.set(_wishList.name, _wishList);
};

//get route

const getWishList = () => {
  return [...wishList.values()];
};

module.exports = { createWishList, getWishList };
