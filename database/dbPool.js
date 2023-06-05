const  mysql = require('mysql2');
const dbOptions = require('./dbconfig');

const pool = mysql.createPool(dbOptions);
const promisePool = pool.promise();

module.exports=promisePool;