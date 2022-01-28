const fs = require("fs");
const dataDir = `${__dirname}/../data`;

if(!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

module.exports = {
    development: {
        client: "better-sqlite3",
        connection: {
            filename: `${dataDir}/db.sqlite3`
        },
        useNullAsDefault: true
    }
}