const db = require("../config/db.config");

exports.postRegister = (data, callback) => {
  db.query(
    `INSERT INTO users (firstName, lastName, emailId, password) VALUES (?, ?, ?, ?)`,
    [data.firstName, data.lastName, data.emailId, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, `Registration successful`);
    }
  );
};

exports.getRegister = (data, callback) => {
  db.query(
    `SELECT * from users`,
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      console.log(results)
      return callback(null, results);
    }
  );
};

exports.login = (data, callback) => {
  db.query(
    `SELECT * FROM users WHERE emailId = ? AND password = ?`,
    [data.emailId, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      if (results.length > 0) {
        return callback(null, results);
      } else {
        return callback("Invalid credentials");
      }
    }
  );
};