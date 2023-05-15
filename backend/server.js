// const connectToMongo = require('./db')
const cors = require('cors')
const mongoose = require('mongoose');

// connectToMongo();
const flag = mongoose.connect('mongodb+srv://Hasanabbas:45cqLrPRIh29XLEd@nosqlproject.okvsiyt.mongodb.net/NoSQLProject', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
});
if(flag)
  console.log('Connected to MongoDB');

const express = require('express')
const app = express()
const port = 5000

app.use(express.json());
app.use(cors());

app.use('/api/mostLikesYTSep', require('./routes/YTSep/mostLikesYTSep'));
app.use('/api/mostCommentsYTSep', require('./routes/YTSep/mostCommentsYTSep'));
app.use('/api/mostViewsYTSep', require('./routes/YTSep/mostViewsYTSep'));
app.use('/api/mostSubscribersYTSep', require('./routes/YTSep/mostSubscribersYTSep'));
app.use('/api/mostLandCYTSep', require('./routes/YTSep/mostLandCYTSep'));
app.use('/api/popularByCategoryYTSep', require('./routes/YTSep/popularByCategoryYTSep'));

app.use('/api/mostSubscribersInsSep', require('./routes/InsSep/mostSubscribersInsSep'));
app.use('/api/mostEngagementInsSep', require('./routes/InsSep/mostEngagementInsSep'));


app.use('/api/mostSubscribersTTSep', require('./routes/TiktokSep/mostSubscribersTTSep'));
app.use('/api/mostViewsTTSep', require('./routes/TiktokSep/mostViewsTTSep'));
app.use('/api/mostLikesTTSep', require('./routes/TiktokSep/mostLikesTTSep'));
app.use('/api/mostCommentsTTSep', require('./routes/TiktokSep/mostCommentsTTSep'));

// app.use('/api/responses', require('./routes/responses'));
// app.use('/api/questions', require('./routes/questions'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})