// ref exercise 13.16 catController

const express = require("express");
const router = express.Router();

// import burger model
const burger = require("../models/burger.js");

// create routes
// GET route
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burger: data,
    };
    console.log("hbsObject", hbsObject);
    res.render("index", hbsObject);
  });
});
// POST route
router.post("/api/burgers", (req, res) => {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.name, req.body.devoured],
    (result) => {
      // send back ID of new burger name
      res.json({ id: result.insertId });
    }
  );
});
// UPDATE route

// export router
module.exports = router;
