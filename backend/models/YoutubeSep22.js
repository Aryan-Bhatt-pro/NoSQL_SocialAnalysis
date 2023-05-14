const mongoose = require('mongoose');

const YoutubeSchema = new mongoose.Schema({
  "S no": {
    type: Number,
  },
  Name: {
    type: String,
    // required: true
  },
  Youtuber: {
    type: String,
    // required: true
  },
  Country: {
    type: String,
    // required: true
  },
  Subscribers: {
    type: Number,
    // required: true
  },
  Category_2: {
    type: String,
  },
  "AvgViews": {
    type: Number,
    // required: true
  },
  "AvgLikes": {
    type: Number,
    // required: true
  },
  "AvgComments": {
    type: Number
    // required: true
  }
}, { collection: 'youtubesep22' });

// const YoutubeSep22 = 

module.exports = mongoose.model('Youtubesep22', YoutubeSchema);
