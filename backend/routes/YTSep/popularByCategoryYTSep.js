const express = require("express");
// const { db } = require("../models/TextQuestion");
const router = express.Router();
const YoutubeSep22 = require("../../models/YoutubeSep22")

router.get('/', async (req, res) => {
    // let result = YoutubeSep22.find({});
    // const docs = await YoutubeSep22.find({"AvgViews": {$gte : 10}}).sort({"AvgViews": -1}).limit(3);
    const docs = await YoutubeSep22.aggregate([
      {
        $group: {
          _id: {
            category: { $ifNull: ["$Category_2", "$Category_3"] }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: {
          count: -1
        }
      },
      {
        $skip: 1
      },
      {
        $limit: 4
      }, 
      {
        $project: {
          _id: 0,
          Category: "$_id.category",   
          count: 1
        }
      }
      ]);
    
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