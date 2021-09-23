// const { dbParams } = require("../lib/db");
// const { Pool } = require('pg');
const {
  insertEntry,
  insertUser,
  selectUserInfo,
  selectEntriesByCategory,
  updateEntryTitle,
  updateEntryStatus,
  updateEntryCategory,
  completedEntries,
  unfinishedEntries,
  selectUserCreatedDate,
  selectUnfinishedEntriesCount,
  selectActiveEntriesByCategory,
  selectCategoryByEntryId,
  selectTitleByEntryId,
  updateUserNameAndEmailByID
} = require("./queries/query_strings");
// console.log("<<<<<<<<<<<<<<<<", dbParams);
// const pool = new Pool({dbParams});

// * * * db query functions * * *

const getUserById = (id, db) => {
  return db
    .query(selectUserInfo, [id])
    .then((res) => {
      // console.log('⭐️ res.rows in getUserFromId query: ', res.rows);
      return res.rows[0];
    })
    .catch((err) => console.log(err.message + " from db/db.js getUserFromId"));
};

const getEntriesByCategory = (id, category, db) => {
  return db
    .query(selectEntriesByCategory, [id, category])
    .then((res) => {
      console.log("⭐️ res.rows from getEntriesByCategory Query: ", res.rows);
      return res.rows;
    })
    .catch((err) => err.message + " from db/db.js getEntriesByCategory");
};

const getActiveEntriesByCategory = (id, category, db) => {
  return db
    .query(selectActiveEntriesByCategory, [id, category])
    .then((res) => {
      console.log(
        "⭐️ res.rows from getActiveEntriesByCategory Query: ",
        res.rows
      );
      return res.rows;
    })
    .catch((err) => err.message + " from db/db.js getActiveEntriesByCategory");
};

const getCompletedEntriesById = (id, db) => {
  return db
    .query(completedEntries, [id])
    .then((res) => {
      console.log("completedTasks:", res.rows);
      return res.rows;
    })
    .catch((err) =>
      console.log(err.message + " from db/db.js getCompletedEntriesById")
    );
};

const getUnfinishedEntriesById = (id, db) => {
  return db
    .query(unfinishedEntries, [id])
    .then((res) => {
      console.log("UnfinishedTasks:", res.rows);
      return res.rows;
    })
    .catch((err) =>
      console.log(err.message + " from db/db.js getUnfinishedEntriesById")
    );
};

const getUserCreationDate = (id, db) => {
  return db
    .query(selectUserCreatedDate, [id])
    .then((res) => {
      console.log("User creation Date: ", res.rows[0]);
      return res.rows[0];
    })
    .catch((err) =>
      console.log(err.message + " from db/db.js getUserCreationDate")
    );
};

const getUnfinishedEntriesCountById = (id, db) => {
  return db
    .query(selectUnfinishedEntriesCount, [id])
    .then((res) => {
      console.log("UnfinishedTasks:", res.rows[0]);
      return res.rows[0];
    })
    .catch((err) =>
      console.log(err.message + " from db/db.js getUnfinishedEntriesById")
    );
};

const getCategoryIdByEntryId = (entryId, db) => {
  return db
    .query(selectCategoryByEntryId, [entryId])
    .then((res) => {
      console.log("categoryID from entryid", res.rows[0]);
      return res.rows[0];
    })
    .catch((err) =>
      console.log(err.message + " from db/db.js getCategoryIdByEntryId")
    );
};

const getTitleByEntryId = (entryId, db) => {
  return db
    .query(selectTitleByEntryId, [entryId])
    .then((res) => {
      console.log("Title from entryid", res.rows[0]);
      return res.rows[0];
    })
    .catch((err) =>
      console.log(err.message + " from db/db.js getTitleByEntryId")
    );
};
// Do we need a "getAllEntriesById" function?

// * * * db insert functions * * *

const newEntry = (entry, db) => {
  const values = [
    entry.userId,
    entry.title,
    entry.desc,
    entry.due,
    entry.category_id,
  ];
  console.log("entry here: ", entry);
  console.log("<<<<<<<<<<<<<<< entry", values, ">>>>>>>>>>>>>>>>");
  return db
    .query(insertEntry, values)
    .then((result) => {
      console.log(result.rows, "<<<<<<<<<<<<<<<<<<<");
      result.rows[0];
    })
    .catch((error) => error.message + " from db/db.js newEntry");
};

const newUser = (uname, password, email, db) => {
  return db
    .query(insertUser, [uname, password, email])
    .then((res) => res.rows)
    .catch((err) => err.message + " from db/db.js newUser");
};

// * * *  db update functions * * *

const updateStatus = (entryId, newStatus, db) => {
  console.log("reached update status ---------------------");
  return db
    .query(updateEntryStatus, [newStatus, entryId])
    .then((res) => res.rows)
    .catch((err) => err.message + " from db/db.js updateStatus");
};

const updateCategory = (entryId, newCategory, db) => {
  return db
    .query(updateEntryCategory, [newCategory, entryId])
    .then()
    .catch((err) => err.message + " from db/db.js updateCategory");
};

const updateTitle = (entryId, newTitle, db) => {
  return db
    .query(updateEntryTitle, [newTitle, entryId])
    .then((res) => res.rows)
    .catch((err) => err.message + " from db/db.js updateTitle");
};

const updateUser = (name, email, userId, db) => {
  return db
    .query(updateUserNameAndEmailByID, [name, email, userId])
    .then((res) => res.rows)
    .catch((err) => err.message + " from db/db.js updateTitle");
};

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
  getUnfinishedEntriesCountById,
  getActiveEntriesByCategory,
  updateTitle,
  getCategoryIdByEntryId,
  getTitleByEntryId,
  updateUser
};
