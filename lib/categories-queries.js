const db = require("./db");
const fetchDatatypes = require("./helper/fetchDatatypes");

const getCategoriesByCategory = (category, id) => {
    return db
        .query(`SELECT *
        FROM entries
        JOIN categories ON entries.category_id = categories.id
        JOIN entries.user_id = users.id
        WHERE categoris.category = $1
        AND users.id = $2`, [category, id])
        .then((response) => {
            return response.rows;
        })
        .catch(
            console.log("problem inside lib/todos-queries.js, function getTodos")
        );
};

module.exports = {
    getCategoriesByCategory
}