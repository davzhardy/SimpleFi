const pool = require ('./pool');
const path = require ('path');

async function getTokens () {
  try {
    const tokens = await pool.query('select * from token');
    return tokens.rows;

  } catch (err) {
    console.error(`Error at ${path.basename(__dirname)}/${path.basename(__filename)} ${err}`);
  } 
}

async function selectUserFieldTokens(queryStr) {
  try {
    const tokens = await pool.query(`select * from token where ${queryStr}`);
    return tokens.rows;
  } catch (err) {
    console.error(`Error at ${path.basename(__dirname)}/${path.basename(__filename)} ${err}`);
  }
}

module.exports = {
  getTokens,
  selectUserFieldTokens
}