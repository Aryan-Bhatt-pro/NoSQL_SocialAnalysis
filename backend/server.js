// const connectToMongo = require('./db')
const cors = require('cors')
const mongoose = require('mongoose');

// connectToMongo();
const flag = mongoose.connect('mongodb://localhost:27017/NoSQLProject', {
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

app.use('/api/mostLikesYTSep', require('./routes/mostLikesYTSep'));
app.use('/api/mostCommentsYTSep', require('./routes/mostCommentsYTSep'));
// app.use('/api/responses', require('./routes/responses'));
// app.use('/api/questions', require('./routes/questions'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})