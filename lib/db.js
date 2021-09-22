// let dbParams = {};
// if (process.env.DATABASE_URL) {
//   dbParams.connectionString = process.env.DATABASE_URL;
// } else {
//   dbParams = {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
//   };
// }

// module.exports = dbParams;

require("dotenv").config();

let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
  };
}

module.exports = dbParams;

// load .env data into process.env
// require("dotenv").config();

// const pg = require("pg");
// const Client = pg.Client;

// const config = {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT,
// };

// console.log({ user: config.user, password: config.password });

// const client = new Client(config);

// client.connect(() => {
//   console.log("connected to database");
// });

// module.exports = client;
