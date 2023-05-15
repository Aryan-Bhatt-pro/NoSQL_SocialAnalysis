const express = require("express");
// const { db } = require("../models/TextQuestion");
const router = express.Router();
const InstagramSep22 = require("../../models/InstagramSep22")

router.post('/', async (req, res) => {
    let docs;
    if (req.body.currentCategory !== "All") {
        docs = await InstagramSep22.aggregate([
            {
                $match: {
                    "AuthenticEngagement": { $gte: 10 },
                    $or: [
                        { "Category_1": req.body.currentCategory },
                        { "Category_2": req.body.currentCategory }
                    ]
                }
            },
            {
                $sort: { "AuthenticEngagement": -1 }
            },
            {
                $limit: 3
            },
            {
                $project: {
                    _id: 0,
                    Name: 1,
                    AuthenticEngagement: 1
                }
            }
        ]);
    }
    else {
        docs = await InstagramSep22.find({ "AuthenticEngagement": { $gte: 10 } }).sort({ "AuthenticEngagement": -1 }).limit(3).select('Name AuthenticEngagement -_id');
    }
    // console.log(docs);
    console.log(typeof docs);
    // to access the current category
    console.log(req.body.currentCategory)
    res.json(docs)
    });



module.exports = router