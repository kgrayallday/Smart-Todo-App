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

// const db = require("./lib/db.js");

const userQueries = require("./lib/users-queries");

// // PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

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
app.use(
  cookieSession({
    name: "session",
    keys: ["userID"],
  })
);

app.use(express.static("public"));

const homeRouter = require("./routes/home");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const profileRouter = require("./routes/profile");
const todoRouter = require("./routes/todo");
const categoryRouter = require("./routes/category");

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.use("/home", homeRouter(db));
// app.use("/login", loginRouter(db)); //not used atm
// app.use("/logout", logoutRouter(db));
app.use("/profile", profileRouter(db));
app.use("/todo", todoRouter(db));
app.use("/category", categoryRouter(db));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

//grant all on users to labber;
