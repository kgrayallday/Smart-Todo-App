const insertEntry = `INSERT INTO entries (user_id, title, description, due_date, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *;`;

const insertUser = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`;

const selectUserInfo = `SELECT * FROM users WHERE id = $1;`;

const selectEntriesByUser = `SELECT * FROM entries JOIN users ON users.id = users_id WHERE users_id = $1;`;

const selectEntriesByCategory = `SELECT * FROM entries JOIN users ON users.id = user_id WHERE users_id = $1 AND category_id = $2;`;

const updateEntryStatus = `UPDATE entries SET status_id = $1 WHERE id = $2;`;

const updateEntryCategory = `UPDATE entries SET category_id = $1 WHERE id = $2;`;

const updateEntryTitle = `UPDATE entries SET title = $1 WHERE id = $2;`;

const updateEntryDescription = `UPDATE entries SET description = $1 WHERE id = $2;`;

const updateEntryDueDate = `UPDATE entries SET due_date = $1 where id = $2;`;

const updateEntryCompletedDate = `UPDATE entries SET completed_date = $1 WHERE $2;`;

const deleteEntry = `DELETE FROM entries WHERE id = $1 RETURNING id`;

const completedEntries = `SELECT entries.id, entries.title FROM entries JOIN users ON users.id = user_id WHERE users.id = $1 AND statuses_id = 2 ORDER BY entries.id DESC LIMIT 5`;

const unfinishedEntries = `SELECT entries.id, entries.title FROM entries JOIN users ON users.id = user_id WHERE users.id = $1 AND statuses_id = 1 ORDER BY entries.id DESC LIMIT 5`;

const selectUserCreatedDate = `SELECT min(created_date) AS user_creation_date FROM entries JOIN users ON users.id = entries.user_id WHERE users.id = $1;`

const selectUnfinishedEntriesCount = `SELECT count(*) AS unfinished_entries_count  FROM entries JOIN users ON users.id = user_id WHERE users.id = $1 AND statuses_id = 1;`

module.exports = {
  insertEntry,
  insertUser,
  selectUserInfo,
  selectEntriesByUser,
  selectEntriesByCategory,
  updateEntryStatus,
  updateEntryCategory,
  updateEntryTitle,
  updateEntryDescription,
  updateEntryDueDate,
  updateEntryCompletedDate,
  deleteEntry,
  completedEntries,
  unfinishedEntries,
  selectUserCreatedDate,
  selectUnfinishedEntriesCount
};
