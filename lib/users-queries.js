const db = require("./db");

const getUsers = () => {
  return db
    .query("SELECT * FROM users;")
    .then((response) => {
      return response.rows;
    })
    .catch(console.log("problem inside lib/users-queries.js"));
};

const getUsersByID = (id) => {
  return db
    .query(
      `SELECT * FROM USERES
  WHERE users = $!`,
      id
    )
    .then((response) => {
      return response.rows;
    })
    .catch(
      console.log("problem inside lib/users-queries.js, function getUsersByID")
    );
};

const addUser = (name, email, password, profile_url) => {
  return db.query(
    `INSERT INTO users (name, email, password, profile_url)
  VALUES ($1, $2, $3, $4
  RETURNING id`,
    name,
    email,
    password,
    profile_url
  )
  .then((response) => {
    return response.rows;
  })
  .catch(
    console.log("problem inside lib/users-queries.js, function addUser")
  );
};

module.exports = {
  getUsers,
  getUsersByID,
  addUser
};
