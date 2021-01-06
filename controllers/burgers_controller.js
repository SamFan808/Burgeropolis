// ref exercise 13.17 CatsApp

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
    (data) => {
      // send back ID of new burger name
      res.json({ id: data.insertId });
    }
  );
});

// UPDATE route
router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;
  console.log("condition", condition);
  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (data) => {
      if (data.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});
// export router
module.exports = router;
