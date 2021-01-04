// npm dependencies
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Sets up the Express app to handle data parsing
// middleware -
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
