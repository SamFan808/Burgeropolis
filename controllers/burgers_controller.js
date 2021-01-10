// ref exercise 13.17 CatsApp

const express = require("express");
const router = express.Router();

// import burger model
const burger = require("../models/burger.js");

// create routes
// GET route
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burger_data: data,
    };
    console.log("hbsObject", hbsObject);
    res.render("index", hbsObject);
  });
});

// POST route
router.post("/api/burgers", (req, res) => {
  burger.insertOne(req.body.burger_name, (data) => {
    // send back ID of new burger name
    console.log(data);
    res.redirect("/");
  });
});

// UPDATE route
router.put("/api/burgers/:id", (req, res) => {
  burger.updateOne(req.params.id, (data) => {
    console.log(data);
    res.status(200).end();
  });
});

// router.put("/burgers/:id", function (req, res) {
//   burger.updateOne(req.params.id, function (result) {
//     // wrapper for orm.js that using MySQL update callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     // Send back response and let page reload from .then in Ajax
//     res.sendStatus(200);
//   });
// });

// export router
module.exports = router;
