
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('visited').del()
    .then(function () {
      // Inserts seed entries
      return knex('visited').insert([
        {image: 'https://lh5.googleusercontent.com/p/AF1QipNqARM3BeJbVX4X-DGZ11QYOReR3GLMU3K7g-0q=w408-h306-k-no', name: 'Cinnabon', menu: 'Classic Cinnamon Roll', genre: 'カフェ・スイーツ', date: '2020-06-25', rate: 5.0, comment: 'I loooove Cinnabon!', lat: 35.6617683,lng: 139.73},
        {image: 'https://lh5.googleusercontent.com/p/AF1QipPaBN_KWs-lUlNijpLQF8Lf5He5mDT3917ljFYs=w408-h306-k-no', name: 'HARBS', menu: 'MilCrepe', genre: 'カフェ・スイーツ', date: '2020-12-20', rate: 4.5, comment: 'The cake was big!', lat: 35.6598593,lng: 139.72},
      ]);
    });
};
