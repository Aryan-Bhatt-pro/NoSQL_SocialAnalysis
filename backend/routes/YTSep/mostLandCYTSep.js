const express = require("express");
// const { db } = require("../models/TextQuestion");
const router = express.Router();
const YoutubeSep22 = require("../../models/YoutubeSep22")

router.post('/', async (req, res) => {
    // let result = YoutubeSep22.find({});
  let docs;
  if (req.body.currentCategory !== "All") {
    docs = await YoutubeSep22.aggregate([
      {
        $match: {
          $or: [
            { "Category_2": req.body.currentCategory },
            { "Category_3": req.body.currentCategory }
          ]
        }
      },
      {
        $addFields: {
          combinedLikesAndComments: { $add: ["$AvgLikes", "$AvgComments"] }
        }
      },
      {
        $sort: { combinedLikesAndComments: -1 }
      },
      {
        $limit: 3
      },
      {
        $project: {
          _id: 0,
          Youtuber: 1,
          combinedLikesAndComments: 1
        }
      }
    ]);
  }
  else {
    docs = await YoutubeSep22.aggregate([
      {
        $addFields: {
          combinedLikesAndComments: { $add: ["$AvgLikes", "$AvgComments"] }
        }
      },
      {
        $sort: { combinedLikesAndComments: -1 }
      },
      {
        $limit: 3
      },
      {
        $project: {
          _id: 0,
          Youtuber: 1,
          combinedLikesAndComments: 1
        }
      }
    ]);
  }
    
    // doc_relevant = docs.AvgViews.AvgViews

    console.log(req.body.currentCategory)
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