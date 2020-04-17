const Express = require("express");
const router = Express.Router();

router.get("/", async (req, res) => {
  const data = { navbar: true, logged: false };
  res.render("welcome", data);
});

module.exports = router;