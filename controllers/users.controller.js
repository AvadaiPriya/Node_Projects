const usersService = require("../services/users.service");

exports.postRegister = (req, res, next) => {
  // Validation area
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    password: req.body.password,
  };
  usersService.postRegister(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.getRegister = (req, res, next) => {
  const data = {};
  usersService.getRegister(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      data: results,
    });
  });
};

exports.login = (req, res, next) => {
  // Validation area
  const data = {
    emailId: req.body.emailId,
    password: req.body.password,
  };
  usersService.login(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};