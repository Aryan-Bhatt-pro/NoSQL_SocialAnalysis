const express = require("express");
// const { db } = require("../models/TextQuestion");
const router = express.Router();
const YoutubeSep22 = require("../../models/YoutubeSep22")

router.post('/', async (req, res) => {
    // let result = YoutubeSep22.find({});
    const docs = await YoutubeSep22.find({"AvgLikes": {$gte : 5}}).sort({"AvgLikes": -1}).limit(3).select('Youtuber AvgLikes -_id');
    

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