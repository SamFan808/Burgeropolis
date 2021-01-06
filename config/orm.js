const connection = require("../config/connection.js");

// methods for MySQL commands

const orm = {
  selectAll(id, burger_name, devoured) {
    const queryString = "SELECT * FROM burgers";
    connection.query(
      queryString,
      [id, burger_name, devoured],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  insertOne(id, burger_name) {
    const insertBurger = "INSERT INTO burgers SET ?";
    connection.query(
      insertBurger,
      {
        id,
        burger_name,
      },
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  updateOne(devoured) {
    const updateBurger = "UPDATE burgers SET ? WHERE ?";
    connection.query(
      updateBurger,
      [
        {
          // devoured = true
        },
      ],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
};

module.exports = orm;
