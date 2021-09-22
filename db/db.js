// const { dbParams } = require("../lib/db");
// const { Pool } = require('pg');
const { insertEntry, insertUser, selectUserInfo, selectEntriesByCategory, updateEntryStatus, updateEntryCategory, completedEntries, unfinishedEntries, selectUserCreatedDate, selectUnfinishedEntriesCount } = require('./queries/query_strings');
// console.log("<<<<<<<<<<<<<<<<", dbParams);
// const pool = new Pool({dbParams});


// * * * db query functions * * *

const getUserById = (id, db) => {
  return db
    .query(selectUserInfo, [id])
    .then(res => {
      // console.log('⭐️ res.rows in getUserFromId query: ', res.rows);
      return res.rows[0];
    })
    .catch(err => console.log(err.message+ ' from db/db.js getUserFromId'));
};

const getEntriesByCategory = (id, category, db) => {
  return db
    .query(selectEntriesByCategory, [id,category])
    .then(res => {
      console.log('⭐️ res.rows from getEntriesByCategory Query: ', res.rows);
      return res.rows;
    })
    .catch(err => err.message + ' from db/db.js getEntriesByCategory');
};

const getCompletedEntriesById = (id, db) => {
  return db
  .query(completedEntries, [id])
  .then(res => {
    console.log('completedTasks:' , res.rows);
    return res.rows;
  })
  .catch(err => console.log(err.message+ ' from db/db.js getCompletedEntriesById'));
}

const getUnfinishedEntriesById = (id, db) => {
  return db
  .query(unfinishedEntries, [id])
  .then(res => {
    console.log('UnfinishedTasks:' , res.rows);
    return res.rows;
  })
  .catch(err => console.log(err.message+ ' from db/db.js getUnfinishedEntriesById'));
}

const getUserCreationDate = (id, db) => {
  return db
  .query(selectUserCreatedDate, [id])
  .then(res => {
    console.log('User creation Date: ' , res.rows[0]);
    return res.rows[0];
  })
  .catch(err => console.log(err.message+ ' from db/db.js getUserCreationDate'));
}

const getUnfinishedEntriesCountById = (id, db) => {
  return db
  .query(selectUnfinishedEntriesCount, [id])
  .then(res => {
    console.log('UnfinishedTasks:' , res.rows[0]);
    return res.rows[0];
  })
  .catch(err => console.log(err.message+ ' from db/db.js getUnfinishedEntriesById'));
}
// Do we need a "getAllEntriesById" function?

// * * * db insert functions * * *

const newEntry = (entry, db) => {
  const values = [entry.userId, entry.title, entry.desc, entry.due, entry.category_id];
  console.log("entry here: ", entry);
  console.log('<<<<<<<<<<<<<<< entry', values, '>>>>>>>>>>>>>>>>');
  return db
    .query(insertEntry, values)
    .then(result => {
      console.log(result.rows, "<<<<<<<<<<<<<<<<<<<");
      result.rows[0]
    })
    .catch(error => error.message + ' from db/db.js newEntry');
};

const newUser = (uname, password, email, db) => {
  return db
    .query(insertUser, [uname, password, email])
    .then(res => res.rows)
    .catch(err => err.message + ' from db/db.js newUser');
}

// * * *  db update functions * * *

const updateStatus = (entryId, newStatus, db) => {
  return db
    .query(updateEntryStatus, [entryId, newStatus])
    .then()
    .catch(err => err.message  + ' from db/db.js updateStatus');
}

const updateCategory = (entryId, newCategory, db) => {
  return db
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
  updateCategory,
  getCompletedEntriesById,
  getUnfinishedEntriesById,
  getUserCreationDate,
  getUnfinishedEntriesCountById
};
