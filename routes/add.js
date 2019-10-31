const { Router } = require("express");
const Movie = require("../models/movie");
const router = Router();

router.get("/", (req, res) => {
  res.render("add", {
    title: "adding movie",
    isAdd: true
  });
});

router.post("/", (req, res) => {
  const movie = new Movie(req.body.title, req.body.description, req.body.img);
  movie.save();
  res.redirect("/");
});

module.exports = router;
