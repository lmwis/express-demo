const {Sequelize} = require('sequelize');
const {config} = require('../config');

module.exports.sequelize = new Sequelize(config.databases, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    port: config.port,
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})