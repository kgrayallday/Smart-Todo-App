const { dbParams } = require('../lib/db');
const { Pool } = require('pg');
const { insertEntry, insertUser, selectUserInfo, selectEntriesByCategory, updateEntryStatus, updateEntryCategory } = require('./queries/query_strings');

const pool = new Pool({dbParams});

// * * * db query functions * * *

const getUserById = (id) => {
  return pool
    .query(selectUserInfo, id)
    .then(res => {
      console.log('⭐️ res.rows in getUserFromId query: ', res.rows);
      return res.rows[0];
    })
    .catch(err => err.message+ ' from db/db.js getUserFromId');
};

const getEntriesByCategory = (id, category) => {
  return pool
    .query(selectEntriesByCategory, [id,category])
    .then(res => {
      console.log('⭐️ res.rows from getEntriesByCategory Query: ', res.rows);
      return res.rows;
    })
    .catch(err => err.message + ' from db/db.js getEntriesByCategory');
};

// Do we need a "getAllEntriesById" function?

// * * * db insert functions * * *

const newEntry = (entry) => {
  const values = [entry.userId, entry.title, entry.desc, entry.due];

  return pool
    .query(insertEntry, values)
    .then(result => result.rows[0])
    .catch(error => error.message + ' from db/db.js newEntry');
};

const newUser = (uname, password, email) => {
  return pool
    .query(insertUser, [uname, password, email])
    .then(res => res.rows)
    .catch(err => err.message + ' from db/db.js newUser');
}

// * * *  db update functions * * *

const updateStatus = (entryId, newStatus) => {
  return pool
    .query(updateEntryStatus, [entryId, newStatus])
    .then()
    .catch(err => err.message  + ' from db/db.js updateStatus');
}

const updateCategory = (entryId, newCategory) => {
  return pool
    .query(updateEntryCategory, [entryId, newCategory])
    .then()
    .catch(err => err.message  + ' from db/db.js updateCategory');
}

module.exports = {
  getUserById,
  getEntriesByCategory,
  newEntry,
  newUser,
  updateStatus,
  updateCategory
};
