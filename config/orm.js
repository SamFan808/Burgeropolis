const { query } = require("../config/connection.js");
const connection = require("../config/connection.js");

// Helper function for SQL syntax to add question marks (?, ?, ?) in query
const printQuestionMarks = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
};
// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
  const arr = [];
  for (const key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }
      arr.push(`${key}=${value}`);
    }
  }

  // Translate array of strings to a single comma-separated string
  return arr.toString();
};
// methods for MySQL commands

const orm = {
  selectAll(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput}`;
    connection.query(queryString, (err, data) => {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },

  insertOne(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, data) => {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },

  updateOne(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table}`;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, (err, data) => {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
};

module.exports = orm;
