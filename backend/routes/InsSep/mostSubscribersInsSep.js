const express = require("express");
// const { db } = require("../models/TextQuestion");
const router = express.Router();
const InstagramSep22 = require("../../models/InstagramSep22")

router.get('/', async (req, res) => {
    // let result = YoutubeSep22.find({});
    const docs = await InstagramSep22.find({"Subscribers": {$gte : 10}}).sort({"subscribers": -1}).limit(3).select('Name Subscribers -_id');
    
    
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