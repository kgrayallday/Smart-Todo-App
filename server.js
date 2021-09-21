// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require("morgan");
const cookieSession = require("cookie-session");

const db = require("./lib/db.js");

const userQueries = require("./lib/users-queries");

// app.get("/home", (req, res) => {
//     res.render("index");
// });

// app.get("/category/multimedia", (req, res) => {
//     res.render("category");
// });

// app.get("/category/multimedia/edit", (req, res) => {
//     res.render("edit");
// });

// app.get("/profile", (req, res) => {
//     res.render("profile");
// });

// app.get("/profile/edit", (req, res) => {
//     res.render("profile_edit");
// });
// // PG database client/connection setup
// const { Pool } = require("pg");
// const dbParams = require("./lib/db.js");
// const db = new Pool(dbParams);
// db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    "/styles",
    sass({
        src: __dirname + "/styles",
        dest: __dirname + "/public/styles",
        debug: true,
        outputStyle: "expanded",
    })
);

app.use(express.static("public"));

const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const profileRouter = require("./routes/profile");
const todoRouter = require("./routes/todo");
const categoryRouter = require("./routes/category");

app.get('/', (req, res) => {
    res.render('index');
});

app.get("/", (req, res) => {
  res.render('index.ejs');
});
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/profile", profileRouter);
app.use("/todo", todoRouter);
app.use("/category", categoryRouter);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

//grant all on users to labber;