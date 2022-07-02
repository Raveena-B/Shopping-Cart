const koa_router = require("koa-router");
const { createProfile, getProfile } = require("../API/customer");

const router = new koa_router({ prefix: "/customer" });

//post method

router.post("/", (ctx) => {
  let profile = ctx.request.body;
  console.log(profile);
  profile = createProfile(profile);
  ctx.body = "Successfully created the Profile";
});

//get method

router.get("/", (ctx) => {
  ctx.body = getProfile();
});

module.exports = router;
