exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.integer("id")
            .notNullable()
            .primary();;
        table.string("first_name", 40)
            .notNullable();
        table.string("second_name", 40)
            .notNullable();
        table.string("address", 40)
            .notNullable();
    })
    .createTable("wishlist", table => {
        table.integer("id")
            .notNullable()
            .primary();
        table.integer("user_id")
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table.string("wish", 40)
            .notNullable();
    })
    .createTable("santa_receiver", table => {
        table.integer("santa_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .primary();
        table.integer("receiver_id")
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users")
        .dropTableIfExists("wishlist")
        .dropTableIfExists("santa_receiver");
};
