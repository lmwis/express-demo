var express = require('express');
var router = express.Router();
const {Sequelize, DataTypes} = require('sequelize');
const {config} = require('../config');
const sequelize = new Sequelize(config.databases, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    port:config.port,
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})
const ReviewsRule = sequelize.define('ReviewsRule', {
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
    timestamps:false
})
// (async function() {
//     const reviewsRules = await ReviewsRule.findAll();
//     console.log(reviewsRules);
// })();
ReviewsRule.findAll().then(res=>{
    console.log(res);
});
console.log('异步');
/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });


});

module.exports = router;
