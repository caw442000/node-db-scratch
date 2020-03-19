
exports.seed = function(knex) {
  // Deletes ALL existing entries

  const data = [
    {name: "cedric", gender: 'male', imageUrl: 'https://picsum.phots/200'},
    {name: "ciana", gender: 'female', imageUrl: 'https://picsum.phots/200'},
    {name: "cali", gender: 'female', imageUrl: 'https://picsum.phots/200'},
  ]

  return knex('characters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert(data);
    });
};
