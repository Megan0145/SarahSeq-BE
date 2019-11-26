
exports.up = function(knex) {
    return knex.schema.createTable("user_tests", tbl => {
        tbl.increments();
        tbl
        .integer("test_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("tests")
        .onDelete("CASCADE");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_tests");
};
