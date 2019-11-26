const router = require("express").Router();
const users = require("./auth-model");

router.post("/register", (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password
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
