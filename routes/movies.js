const { Router } = require("express");
const Movie = require("../models/movie");
const router = Router();

router.get("/", async (req, res) => {
  const allTheMovies = await Movie.getAll();
  res.render("index", {
    title: "All added movies",
    isMovie: true,
    allTheMovies
  });
});

module.exports = router;
