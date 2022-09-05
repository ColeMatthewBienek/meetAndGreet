const mysql = require('mysql2');

//credentials
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sharpei',
  database: 'meetAndGreet'
});

//connect

db.connect(function(err) {
  if (err) {
    return console.log('error connecting to db: ' + err.message);
  }
  console.log('connected as id: ', + db.threadId);
});

//db operations

