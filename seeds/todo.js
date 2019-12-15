exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("todo")
    .del()
    .then(function() {
      const todos = [
        { title: "Firts Title", priority: "1" },
        { title: "Second Title", priority: "2" },
        { title: "Third Title", priority: "3" },
        { title: "Forth Title", priority: "4" }
      ];

      return knex("todo").insert(todos);
    });
};
