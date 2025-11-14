import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "movie_system",
});

// A simple SELECT query
try {
  const [results, fields] = await connection.query("SELECT * FROM movies;");

  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
} catch (err) {
  console.log(err);
}

export default connection;
