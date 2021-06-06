
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('wishlist').del()
    .then(function () {
      // Inserts seed entries
      return knex('wishlist').insert([
        {image: 'https://lh5.googleusercontent.com/p/AF1QipNKZTaencf7Vu8bAwJq3ToKeCWApR_vTW2qDzs=w408-h306-k-no', name: 'yelo', genre: 'カフェ・スイーツ', station: '六本木', lat: 35.6623077, lng: 139.7333315},
      ]);
    });
};
