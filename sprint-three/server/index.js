require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const videos = require('./routes/videos');

const port = process.env.PORT

app.use(express.json());
app.use(cors())

app.use((_req, _res, next) => {
    next()
})

app.use('/videos', videos) 
app.get('/', (req, res, next) => {
    next();
})
  
app.listen(port, error => error? console.error(error):console.info(`Listening on ${port}`))