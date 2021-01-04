// connection
const mysql = require("mysql");
const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "honk balloon tennis",
  database: "burger_db",
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Server start
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

export { connection };
