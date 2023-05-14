const mongoose = require('mongoose');

const TiktokSchema = new mongoose.Schema({
  "S no": {
    type: Number,
  },
  TiktokName: {
    type: String,
    // required: true
  },
  Name: {
    type: String,
    // required: true
  },
  Subscribers: {
    type: Number,
    // required: true
  },
  "ViewsAvg": {
    type: Number,
    // required: true
  },
  "LikesAvg": {
    type: Number,
    // required: true
  },
  "CommentsAvg": {
    type: Number,
    // required: true
  }
}, { collection: 'tiktoksep22' });

// const YoutubeSep22 = 

module.exports = mongoose.model('tiktoksep22', TiktokSchema);
