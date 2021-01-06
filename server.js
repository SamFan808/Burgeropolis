// npm dependencies
const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// static content
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, () =>
  console.log(`App listening on: http://localhost:${PORT}`)
);
