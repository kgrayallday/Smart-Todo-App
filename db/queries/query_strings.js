const insertEntry = `INSERT INTO entries (user_id, title, description, due_date) VALUES ($1, $2, $3, $4) RETURNING *;`;

const insertUser = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`;

const selectUserInfo = `SELECT * FROM users WHERE id = $1;`;

const selectEntriesByUser = `SELECT * FROM entries JOIN users ON users.id = users_id WHERE users_id = $1;`;

const selectEntriesByCategory = `SELECT * FROM entries JOIN users ON users.id = user_id WHERE user_id = $1 AND category_id = $2;`;

const updateEntryStatus = `UPDATE entries SET status_id = $1 WHERE id = $2;`;

const updateEntryCategory = `UPDATE entries SET category_id = $1 WHERE id = $2;`;

const updateEntryTitle = `UPDATE entries SET title = $1 WHERE id = $2;`;

const updateEntryDescription = `UPDATE entries SET description = $1 WHERE id = $2;`;

const updateEntryDueDate = `UPDATE entries SET due_date = $1 where id = $2;`;

const updateEntryCompletedDate = `UPDATE entries SET completed_date = $1 WHERE $2;`;

const deleteEntry = `DELETE FROM entries WHERE id = $1 RETURNING id`;

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
  deleteEntry };
