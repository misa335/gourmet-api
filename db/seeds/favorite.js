
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorite').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorite').insert([
        {
          image: 'https://lh5.googleusercontent.com/p/AF1QipNqARM3BeJbVX4X-DGZ11QYOReR3GLMU3K7g-0q=w408-h306-k-no',
          name: 'Cinnabon',
          genre: 'カフェ・スイーツ',
          comment: 'I loooove Cinnabon!',
          lat: 35.6617683,
          lng: 139.73
        },
      ]);
    });
};
