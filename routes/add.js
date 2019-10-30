const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("add", {
    title: "adding movie",
    isAdd: true
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.redirect("/movies");
});

module.exports = router;
