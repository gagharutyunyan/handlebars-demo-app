const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home page"
  });
});

app.get("/movies", (req, res) => {
  res.render("movies", {
    title: "All added movies"
  });
});

app.get("/add", (req, res) => {
  res.render("add", {
    title: "adding movie"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server was started on port ${PORT}`);
});
