
exports.up = function(knex) {
    return knex.schema.createTable('favorite', (table) => {
        table.increments('id').primary();
        table.string('image');
        table.string('name').notNullable();
        table.string('comment');
        table.string('genre');
        table.float('lat');
        table.float('lng');
    });
};

exports.down = function(knex) {
    return knex.schema.hasTable('favorite')
        .then(function(exists) {
            if(exists) {
                return knex.schema.dropTable('favorite');
            }
        })
};
