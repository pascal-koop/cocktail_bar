import util from 'util';
import mysql from 'mysql';
const pool = mysql.createPool({
  connectionLimit: 10,
  dateStrings: true,
  timezone: 'local',
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cocktail_bar',
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  } else {
    console.log('Connected to database!');
  }
  if (connection) connection.release();
  return;
});

pool.query = util.promisify(pool.query);
export { pool };
