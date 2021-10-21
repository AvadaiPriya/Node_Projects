const db = require("../config/db.config");

exports.addPost = (data, callback) => {
  db.query(
    `INSERT INTO posts (description, imagePath, datetimeCreated, addedByUserId)
    VALUES (?, ?, ?, ?)`,
    [data.description, data.imagePath, new Date(), data.addedByUserId],
    (error, results, fields) => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>",results)
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
};

exports.getAllPosts = (data, callback) => {
    db.query(
      `SELECT p.id AS postId, p.description, p.datetimeCreated, 
      p.likeCount, p.dislikeCount, p.addedByUserId, u.firstName, u.lastName 
      FROM posts AS p INNER JOIN users AS u ON p.addedByUserId = u.id`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  };

  exports.addPostComment = (data, callback) => {
    db.query(
      `INSERT INTO comments (postId, comment, datetimeCreated, addedByUserId) VALUES (?, ?, ?, ?)`,
      [data.postId, data.comment, new Date(), data.addedByUserId],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  };
