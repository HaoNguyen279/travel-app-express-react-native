const {sql, poolPromise} = require('../config/db');

async function getAllPosts(){
    const pool = await poolPromise;
    const result = await pool.request()
        .query("SELECT * FROM Posts");
    return result.recordset;
}

module.exports = {
    getAllPosts
}