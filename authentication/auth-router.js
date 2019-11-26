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
      res
        .status(201)
        .json({
          message: "Account created.",
          user: { id: user.id, username: user.username }
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not add new user: " + err.message });
    });
});

router.post("/login", validateUser, (req, res) => {
  const { username, password } = req.body;

  users
    .findByUsername(username)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res
          .status(200)
          .json({
            message: `Welcome back ${user.username}`,
            user: { id: user.id, username: user.username }
          });
      } else {
        res.status(401).json({
          message: "Could not find user. Invalid credentials provided"
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Could not login user: " + err.message });
    });
});

module.exports = router;
