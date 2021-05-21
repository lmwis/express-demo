const {sequelize} = require('../common/db.js');
const {DataTypes} = require('sequelize');

module.exports.ReviewsRule = sequelize.define('ReviewsRule', {
    Fauto_id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    Fhospital_id: DataTypes.BIGINT,
    Fclass: DataTypes.STRING,
    Fclass_sub: DataTypes.STRING,
    Fcontent: DataTypes.STRING
}, {
    tableName: 't_reviews_rule',
    timestamps: false
})