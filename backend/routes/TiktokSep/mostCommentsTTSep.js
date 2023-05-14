const express = require("express");
// const { db } = require("../models/TextQuestion");
const router = express.Router();
const TiktokSep22 = require("../../models/TiktokSep22")

router.get('/', async (req, res) => {
    const docs = await TiktokSep22.find({"CommentsAvg": {$gte : 10}}).sort({"CommentsAvg": -1}).limit(3).select('Name CommentsAvg -_id');
    console.log(docs);
    res.json(docs)
    });
;


module.exports = router