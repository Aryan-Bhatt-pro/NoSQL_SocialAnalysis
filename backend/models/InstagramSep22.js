const mongoose = require('mongoose');

const InstagramSchema = new mongoose.Schema({
  "S no": {
    type: Number,
  },
  "Instagram Name": {
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
  "Audience Country": {
    type: String,
    // required: true
  },
  Category_1: {
    type: String,
  },
  Category_2: {
    type: String,
  },
  "AuthenticEngagement": {
    type: Number,
    // required: true
  },
  "EngagementAverage": {
    type: Number,
    // required: true
  }
}, { collection: 'instagramsep22' });

// const YoutubeSep22 = 

module.exports = mongoose.model('instagramsep22', InstagramSchema);
