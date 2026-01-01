const {sql, poolPromise} = require('../config/db');

async function getAllUsers() {
    const pool = await poolPromise;
    const result = await pool.request()
        .query('SELECT * FROM Users')
    return result.recordset;
}
async function getUserById(id) {
    const pool = await poolPromise;
    const result = await pool.request()
        .query("SELECT * FROM Users WHERE user_id = ?", [id])
}

module.exports = {
    getAllUsers
}