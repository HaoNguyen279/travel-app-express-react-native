const {sql, poolPromise} = require('../config/db');
const db = require('../config/postgre')
async function getAllPosts(){
    // const pool = await poolPromise;
    // const result = await pool.request()
    //     .query("SELECT * FROM Posts");
    // return result.recordset;
    const result = await db.query("SELECT * FROM Posts");
    return result.rows;

}

module.exports = {
    getAllPosts
}