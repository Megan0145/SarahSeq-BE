const router = require("express").Router();
const users = require("./auth-model");
const bcrypt = require("bcryptjs");
const { validateUser } = require("../middleware");

router.post("/register", validateUser, (req, res) => {
  const hashpw = bcrypt.hashSync(req.body.password, 10);

  const newUser = {
    username: req.body.username,
    password: hashpw
  };

  users
    .add(newUser)
    .then(user => {
      res.status(201).json({ message: "Account created.", user });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not add new user: " + err.message });
    });
});

module.exports = router;
