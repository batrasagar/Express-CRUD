exports.up = function(knex) {
  return knex.schema.table("todo", table => {
    table.string("_method");
  });
};

exports.down = function(knex) {
  return knex.schema.table("todo", table => {
    //   Alter table "method"
    table.dropColumn("_method");
  });
};
