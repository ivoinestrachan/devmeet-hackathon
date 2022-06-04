const Pool = require('pg').Pool

 
const pool = new Pool({
 user: 'postgres',
  host: 'localhost',
  database: 'devmeet',
  password: 'chessmaster22',
  port: 5432,
});

module.exports = pool;