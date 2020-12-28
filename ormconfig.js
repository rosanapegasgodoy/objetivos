module.exports = {
  "type": "mysql",
  "host": "mysql741.umbler.com",
  "port": 3306,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": "gerador_db",
  "entities": [
    "./dist/models/*.js"
  ],
  "migrations": [
    "./dist/database/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "./dist/database/migrations"
  },
  "entities": [
    "./dist/models/*.js"
  ]
}
