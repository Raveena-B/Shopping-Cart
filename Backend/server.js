const koa = require("koa");
const bodyparser = require("koa-bodyparser");
const app = new koa();
const router = require("./router/customer");
const traderItemRouter = require("./router/addItem");
const traderPromotionRouter = require("./router/addPromotion");

app.use(bodyparser());
app.use(router.routes()).use(router.allowedMethods());
app.use(traderItemRouter.routes()).use(traderItemRouter.allowedMethods());
app
  .use(traderPromotionRouter.routes())
  .use(traderPromotionRouter.allowedMethods());

const PORT = 8070;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
