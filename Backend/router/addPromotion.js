const koa_router = require("koa-router");
const { addPromotion, getPromotion } = require("../API/addPromotion");

const router = new koa_router({ prefix: "/trader-promotion" });

//post method

router.post("/", (ctx) => {
  let Promotion = ctx.request.body;
  console.log(Promotion);
  Promotion = addPromotion(Promotion);
  ctx.body = "Successfully created Promotion";
});

//get method

router.get("/", (ctx) => {
  ctx.body = getPromotion();
});

module.exports = router;
