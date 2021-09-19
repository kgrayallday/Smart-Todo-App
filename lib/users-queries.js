const db = require("./db");

const getUsers = () => {
  return db
    .query("SELECT * FROM users;")
    .then((response) => {
      return response.rows;
    })
    .catch(console.log("problem inside lib/users-queries.js, function getUsers"));
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

const addUsers = (name, email, password, profile_url) => {
  return db.query(
    `INSERT INTO users (name, email, password, profile_url)
  VALUES ($1, $2, $3, $4)
  RETURNING id`,
    [name,email,password,profile_url]
  )
  .then((response) => {
    return response.rows;
  })
  .catch(
    console.log("problem inside lib/users-queries.js, function addUser")
  );
};

const updateUsers = (id, name, email, password, profile_url) => {
  return db.query(
    `UPDATE users
    SET name = $1,
    email = $2,
    password = $3,
    profile_url = $4
    WHERE id = $5
    RETURNING *;
    `, [name, email, password, profile_url, id]
  )
  .then ((response) => {
    return response.rows;
  })
  .catch(
    console.log("problem inside lib/users-queries.js, function updateUser")
  );
}

module.exports = {
  getUsers,
  getUsersByID,
  addUsers,
  updateUsers
};
