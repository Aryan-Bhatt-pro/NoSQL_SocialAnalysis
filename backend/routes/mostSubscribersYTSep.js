const express = require("express");
// const { db } = require("../models/TextQuestion");
const router = express.Router();
const YoutubeSep22 = require("../models/YoutubeSep22")

router.get('/', async (req, res) => {
    // let result = YoutubeSep22.find({});
    const docs = await YoutubeSep22.find({"Subscribers": {$gte : 10}}).sort({"Subscribers": -1}).limit(3).select('Youtuber Subscribers -_id');
    
    
    // doc_relevant = docs.AvgViews.AvgViews

    console.log(docs);
    // YoutubeSep22.find({}).then((err, person) =>{
    //     if (err) return (err);
    //     // Prints "Space Ghost is a talk show host".
    //     console.log(person);
    //   });
    });
;


module.exports = router