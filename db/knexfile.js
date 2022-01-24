module.exports = {
    development: {
        client: "better-sqlite3",
        connection: {
            filename: `${__dirname}/../data/db.sqlite3`
        },
        useNullAsDefault: true
    }
}