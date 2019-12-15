exports.up = function(knex) {
  return knex.schema.createTable("todo", table => {
    table.increments();
    table.string("title").notNullable();
    table.integer("priority").notNullable();
    table.text("description");
    table
      .boolean("done")
      .default(false)
      .notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("todo");
};
