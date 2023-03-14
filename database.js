
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  connectionLimit: 10,
  dateStrings: true,
  timezone: 'local',
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cocktail_bar',
});


export { pool };
