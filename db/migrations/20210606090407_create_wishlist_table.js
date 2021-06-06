exports.up = function(knex) {
    return knex.schema.createTable('wishlist', (table) => {
        table.increments('id').primary();
        table.string('image');
        table.string('name').notNullable();
        table.string('genre');
        table.string('station');
        table.float('lat');
        table.float('lng');
    });
};

exports.down = function(knex) {
    return knex.schema.hasTable('wishlist')
        .then(function(exists) {
            if(exists) {
                return knex.schema.dropTable('wishlist');
            }
        })
};
