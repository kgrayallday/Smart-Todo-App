const { dbParams } = require('../lib/db');
const { Pool } = require('pg');
const fs = require('fs');
const userInfoQuery = fs.readFileSync('./queries/user_info.sql');
const userEntriesCategoryQuery = fs.readFileSync('./queries/user_category_entries.sql');

const pool = new Pool({dbParams});

// db query functions

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

module.exports = { getUserFromId, getEntriesByCategory };
