const express = require("express");
// const { db } = require("../models/TextQuestion");
const router = express.Router();
const TiktokSep22 = require("../../models/TiktokSep22")

router.get('/', async (req, res) => {
    const docs = await TiktokSep22.find({"ViewsAvg": {$gte : 10}}).sort({"ViewsAvg": -1}).limit(4).select('Name ViewsAvg -_id');
    console.log(docs);
    res.json(docs)
    });
;


module.exports = router