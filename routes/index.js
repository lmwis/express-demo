var express = require('express');
var router = express.Router();
const {ReviewsRule} = require('../model/ReviewsRule.js')
const {ReviewsRuleItem} = require('../model/ReviewsRuleItem.js')

/* GET home page. */
router.get('/ruleList', async function (req, res, next) {
    const reviewsRules = await ReviewsRule.findAll();
    res.send(reviewsRules);
});
router.get('/ruleListItem', async function (req, res, next) {
    const reviewsRulesItem = await ReviewsRuleItem.findAll();
    res.send(reviewsRulesItem);
});

router.get('/rule/:id', async function (req, res, next) {
    const id = req.params.id;
    const ruleItem = await ReviewsRuleItem.findOne({
        where:{
            'Frule_id':id
        },
        attributes:[
            'Fauto_id',
            'Frule_id',
            'Freduce_score'
        ]
    });
    //const reviewsRulesItem = await ReviewsRuleItem.findAll();
    res.send(ruleItem);
});

module.exports = router;
