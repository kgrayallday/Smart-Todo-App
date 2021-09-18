SELECT * FROM entries
JOIN users ON users.id = user_id
WHERE users_id = $1
AND category_id = $2;
