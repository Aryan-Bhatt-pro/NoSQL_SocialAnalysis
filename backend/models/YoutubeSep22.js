const mongoose = require('mongoose');

const YoutubeSchema = new mongoose.Schema({
  S: {
    type: Object,
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
    type: String,
    // required: true
  },
  Category_2: {
    type: String,
  },
  AvgViews: {
    type: Number,
    // required: true
  },
  AvgLikes: {
    type: String,
    // required: true
  },
  AvgComments: {
    type: Number
    // required: true
  }
}, { collection: 'youtubesep22' });

// const YoutubeSep22 = 

module.exports = mongoose.model('Youtubesep22', YoutubeSchema);
