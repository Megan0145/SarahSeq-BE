const router = require("express").Router();
const userTests = require("../tests/test-model");
const restricted = require("../middleware/restricted")

router.get("/tests", restricted, (req, res) => {
    const id = req.decodedToken.subject;
    userTests.getUserTests(id)
    .then(tests => {
        res.status(200).json(tests)
    })
    .catch(err => {
        res.status(500).json({ message: "Could not get all tests: " + err.message })
    })
})

module.exports = router;