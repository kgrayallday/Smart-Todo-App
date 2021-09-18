const db = require("./db");

const getUsers = () => {
  return db
    .query("SELECT * FROM users;")
    .then((response) => {
      return response.rowCount;
    })
    .catch(console.log("problem inside lib/users-queries.js"));
};

module.exports = {
  getUsers
};
