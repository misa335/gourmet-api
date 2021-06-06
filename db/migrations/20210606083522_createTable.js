
exports.up = function(knex) {
    return knex.schema.createTable('visited', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('menu').notNullable();
        table.date('date');
        table.integer('rate');
        table.string('favorite');
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
