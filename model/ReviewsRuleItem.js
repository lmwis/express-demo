const {sequelize} = require('../common/db.js');
const {DataTypes} = require('sequelize');

module.exports.ReviewsRuleItem = sequelize.define('ReviewsRuleItem', {
    Fauto_id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    Frule_id: DataTypes.BIGINT,
    Freduce_score: DataTypes.INTEGER,
    Fcontent: DataTypes.STRING
}, {
    tableName: 't_reviews_rule_item',
    timestamps: false
})