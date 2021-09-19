const db = require("./db");

const getToDos = () => {
  return db
    .query("SELECT * FROM entries;")
    .then((response) => {
      return response.rows;
    })
    .catch(
      console.log("problem inside lib/todos-queries.js, function getTodos")
    );
};

const getToDosByID = (id) => {
  return db
    .query(
      `SELECT *
  FROM entries
  JOIN users ON entries.user_id = users.id
  JOIN categories ON entries.category = users.id
  WHERE entries.id = $1;`,
      [id]
    )
    .then((response) => {
      return response.rows;
    })
    .catch(
      console.log("problem inside lib/todos-queries.js, function getToDosByID")
    );
};

const getToDosByUserID = (userID) => {
  return db
    .query(
      `SELECT *
  FROM entries
  JOIN users ON entries.user_id = users.id
  JOIN categories ON entries.category = users.id
  WHERE users.id = $1;`,
      [userID]
    )
    .then((response) => {
      return response.rows;
    })
    .catch(
      console.log(
        "problem inside lib/todos-queries.js, function getToDosByUserID"
      )
    );
};

//important!!! I am assuming there is a default created date in the database
const addToDos = (user_id, due_date, completed_date, name, description) => {
  return db.query(
    `INSERT INTO entries (user_id, due_date, completed_date, name, description)`)
  );
};

module.exports = {
  getToDos,
  getToDosByID,
  getToDosByUserID,
  addToDos,
};
