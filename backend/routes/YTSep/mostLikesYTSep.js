const express = require("express");
// const { db } = require("../models/TextQuestion");
const router = express.Router();
const YoutubeSep22 = require("../../models/YoutubeSep22")

router.post('/', async (req, res) => {
    let docs;
    if (req.body.currentCategory !== "All") {
        docs = await YoutubeSep22.aggregate([
            {
                $match: {
                    "AvgLikes": { $gte: 10 },
                    $or: [
                        { "Category_2": req.body.currentCategory },
                        { "Category_3": req.body.currentCategory }
                    ]
                }
            },
            {
                $sort: { "AvgLikes": -1 }
            },
            {
                $limit: 3
            },
            {
                $project: {
                    _id: 0,
                    Youtuber: 1,
                    AvgLikes: 1
                }
            }
        ]);
    }
    else {
        docs = await YoutubeSep22.find({ "AvgLikes": { $gte: 5 } }).sort({ "AvgLikes": -1 }).limit(3).select('Youtuber AvgLikes -_id');
    }

    // doc_relevant = docs.AvgViews.AvgViews

    console.log(req.body.currentCategory);
    res.json(docs)
    // YoutubeSep22.find({}).then((err, person) =>{
    //     if (err) return (err);
    //     // Prints "Space Ghost is a talk show host".
    //     console.log(person);
    //   });
    });
;


module.exports = router