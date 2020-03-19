exports.up = function(knex) {
  return knex.schema.createTable("characters", tbl => {
    tbl.increments();

    tbl
      .string("name", 128)
      .notNullable()
      .unique();

    tbl.string("gender", 128).notNullable();

    tbl.string("imageUrl", 256).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("characters");
};
