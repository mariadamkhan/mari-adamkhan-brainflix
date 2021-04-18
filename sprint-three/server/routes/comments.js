const express = require('express');
const app = express();
const videosData =require('./data/videos.json');
const cors = require ('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log(`the path at ${req.path} was targetted at now`)
    next()
})

app.get('/videos', (_req, res) => {
    res.send(videosData)
    console.log('I worked!');
})

app.listen(8080, error => error? console.error(error):console.info('Listening on 8080'));