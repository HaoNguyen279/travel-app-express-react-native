const {sql, poolPromise} = require('../config/db');

async function getAllPlaces(){
    const pool = await poolPromise;
    const result = await pool.request()
        .query("SELECT * FROM Places");
    return result.recordset;
}

module.exports = {
    getAllPlaces
}