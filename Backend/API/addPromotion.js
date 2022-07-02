const Promotion = new Map();

//create route

const addPromotion = ({ promotionName, discountRate, price }) => {
  console.log(promotionName, discountRate, price);
  const _Promotion = { promotionName, discountRate, price };
  Promotion.set(_Promotion.promotionName, _Promotion);
};

//get route

const getPromotion = () => {
  return [...Promotion.values()];
};

module.exports = { addPromotion, getPromotion };
