const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();

// create connection
// const db = mysql.createConnection({
//   host: process.env.DATABASE_host,
//   port: "8889",
//   user: "brinkley",
//   password: "hello",
//   database: "test1",
// });
// // connect to database
// db.connect((err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("MySql Connected");
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//set view engine to ejs
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen("8", () => {
  console.log("Server is running on Port 8");
});
