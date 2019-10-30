const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("movies", {
    title: "All added movies",
    isMovie: true
  });
});

module.exports = router;
