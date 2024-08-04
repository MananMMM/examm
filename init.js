const Database = require("better-sqlite3")
const db = new Database("test.db")

db.exec(`
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        surname TEXT,
        username TEXT,
        salary INTEGER
    )
`)