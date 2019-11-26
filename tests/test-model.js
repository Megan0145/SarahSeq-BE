const db = require("../data/db-config");

module.exports = {
    getAllTests,
    getUserTests
}

function getAllTests(){
    return db("tests")
}
function getUserTests(id) {
    return db("users as u")
    .join("user_tests as ut", "ut.user_id", "u.id")
    .join("tests as t", "ut.test_id", "t.id")
    .select("u.id as user_id", "u.username", "t.test_name" )
    .where({user_id: id })
}