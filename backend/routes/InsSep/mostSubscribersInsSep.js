const express = require("express");
// const { db } = require("../models/TextQuestion");
const router = express.Router();
const InstagramSep22 = require("../../models/InstagramSep22")

router.post('/', async (req, res) => {
    // let result = YoutubeSep22.find({});
    let docs;
    if (req.body.currentCategory !== "All") {
        docs = await InstagramSep22.aggregate([
            {
                $match: {
                    "Subscribers": { $gte: 10 },
                    $or: [
                        { "Category_1": req.body.currentCategory },
                        { "Category_2": req.body.currentCategory }
                    ]
                }
            },
            {
                $sort: { "Subscribers": -1 }
            },
            {
                $limit: 4
            },
            {
                $project: {
                    _id: 0,
                    Name: 1,
                    Subscribers: 1
                }
            }
        ]);
    }
    else {
        docs = await InstagramSep22.find({ "Subscribers": { $gte: 10 } }).sort({ "subscribers": -1 }).limit(4).select('Name Subscribers -_id');
    }
    
    // to access the current category
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