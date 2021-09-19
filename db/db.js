const { dbParams } = require('../lib/db');
const { Pool } = require('pg');
const fs = require('fs');
const userInfoQuery = fs.readFileSync('./queries/user_info.sql');
const userEntriesCategoryQuery = fs.readFileSync('./queries/user_category_entries.sql');
const insertEntry = fs.readFileSync('./queries/insert_entry');

const pool = new Pool({dbParams});

// * * * db query functions * * *

const getUserFromId = (id) => {
  return pool
    .query(userInfoQuery, id)
    .then(res => {
      console.log('⭐️ res.rows in getUserFromId query: ', res.rows);
      return res.rows;
    })
    .catch(err => err.message);
};

const getEntriesByCategory = (id, category) => {
  return pool
    .query(userEntriesCategoryQuery, [id,category])
    .then(res => {
      console.log('⭐️ res.rows from getEntriesByCategory Query: ', res.rows);
      return res.rows;
    })
    .catch(err => err.message);
};

// Do we need a "getAllEntriesById" function?

// * * * db insert function * * *

const insertEntry = (entry) => {
  const values = [entry.userId, entry.title, entry.desc, entry.due];

  return pool
    .query(insertEntry, values)
    .then(result => result.rows[0])
    .catch(error => error.message);
};

const insertCreateUser = (uname, password, email) => {
  return pool
    .query(insertUser, values)
    .then(res => res.rows)
    .catch(err => err);
}

module.exports = {
  getUserFromId,
  getEntriesByCategory,
  insertEntry,
  insertCreateUser
};
