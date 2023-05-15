const express = require("express");
// const { db } = require("../models/TextQuestion");
const router = express.Router();
const InstagramSep22 = require("../../models/InstagramSep22")

router.post('/', async (req, res) => {
    const docs = await InstagramSep22.find({"AuthenticEngagement": {$gte : 10}}).sort({"AuthenticEngagement": -1}).limit(3).select('Name AuthenticEngagement -_id');
    // console.log(docs);

    // to access the current category
    console.log(req.body.currentCategory)
    res.json(docs)
    });
;


module.exports = router