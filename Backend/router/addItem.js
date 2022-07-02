const koa_router = require("koa-router");
const {
  addItem,
  getItem,
  getItemById,
  updateItemById,
} = require("../API/addItem");

const router = new koa_router({ prefix: "/trader-Item" });

//post method

router.post("/", (ctx) => {
  let Item = ctx.request.body;
  console.log(Item);
  Item = addItem(Item);
  ctx.body = "Successfully created the Profile";
});

//get method

router.get("/", (ctx) => {
  ctx.body = getItem();
});

router.get("/:itemName", (ctx) => {
  const itemName = ctx.params.itemName;
  ctx.body = getItem(itemName);
});

router.put("/update/:itemName", (ctx) => {
  const itemName = ctx.params.itemName;
  let item = ctx.request.body;
  item = updateItemById(itemName, item);
  ctx.body = "Item Updated Successfully";
});
module.exports = router;
