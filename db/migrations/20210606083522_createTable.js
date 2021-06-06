
exports.up = function(knex) {
    return knex.schema.createTable('visited', (table) => {
        table.increments();
        table.string('image');
        table.string('name').notNullable();
        table.string('menu').notNullable();
        table.string('genre');
        table.date('date');
        table.float('rate', 8, 1);
        table.string('comment');
        table.float('lat');
        table.float('lng');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.hasTable('visited')
        .then(function(exists) {
            if(exists) {
                return knex.schema.dropTable('visited');
            }
        });
};
