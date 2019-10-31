const express = require("express");
const exphbs = require("express-handlebars");
const moviesRoute = require("./routes/movies");
const addRoute = require("./routes/add");
const app = express();

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", moviesRoute);
app.use("/add", addRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server was started on port ${PORT}`);
});
