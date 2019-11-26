const router = require("express").Router();
const tests = require("./test-model");

router.get("/", (req, res) => {
    tests.getAllTests()
    .then(tests => {
        res.status(200).json(tests)
    })
    .catch(err => {
        res.status(500).json({ message: "Could not get all tests: " + err.message })
    })
})

module.exports = router;