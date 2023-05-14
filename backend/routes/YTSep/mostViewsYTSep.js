const express = require("express");
// const { db } = require("../models/TextQuestion");
const router = express.Router();
const YoutubeSep22 = require("../../models/YoutubeSep22")

router.get('/', async (req, res) => {
    // let result = YoutubeSep22.find({});
    const docs = await YoutubeSep22.find({"AvgViews": {$gte : 10}}).sort({"AvgViews": -1}).limit(3);
    
    
    // doc_relevant = docs.AvgViews.AvgViews

    console.log(docs);
    res.json(docs)
    // YoutubeSep22.find({}).then((err, person) =>{
    //     if (err) return (err);
    //     // Prints "Space Ghost is a talk show host".
    //     console.log(person);
    //   });
    });
;


module.exports = router