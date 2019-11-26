const router = require("express").Router();
const userTests = require("../tests/test-model");

router.get("/:id/tests", (req, res) => {
    const { id } = req.params;
    userTests.getUserTests(id)
    .then(tests => {
        res.status(200).json(tests)
    })
    .catch(err => {
        res.status(500).json({ message: "Could not get all tests: " + err.message })
    })
})

module.exports = router;