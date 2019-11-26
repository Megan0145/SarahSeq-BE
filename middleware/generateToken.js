const jwt = require("jsonwebtoken");

function generateToken(user) {
  const payload = {
    subject: user.id,
  };

  const options = {
    expiresIn: "1d"
  };

  const result = jwt.sign(payload, process.env.SECRET, options);

  return result;
}

module.exports = generateToken;