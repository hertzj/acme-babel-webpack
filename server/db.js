const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/acme_webpack_fun');

module.exports = db