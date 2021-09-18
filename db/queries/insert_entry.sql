INSERT INTO entries (user_id, title, description, due)
VALUES ($1, $2, $3, $4) RETURNING *;
