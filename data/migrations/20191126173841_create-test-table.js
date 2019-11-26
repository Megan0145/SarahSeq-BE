exports.up = function(knex) {
  return knex.schema.createTable("tests", tbl => {
    tbl.increments();
    tbl
      .string("test_name", 128)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tests");
};
