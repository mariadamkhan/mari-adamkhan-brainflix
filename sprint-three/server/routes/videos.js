const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const videosData = require('../data/videos.json');
const route = express.Router();
route.use(express.json());


route.get('/', (_req, res) => {
    const videos = videosData.map(video => {
        return {
            id:video.id,
            title:video.title,
            channel:video.channel,
            image:video.image
        }
    })
    res.status(200).send(videos)
})

route.get('/:videoId', (req, res) => {
    let videoId = req.params.videoId;
    let videoDetails = videosData.find(video => {
        return video.id === videoId
    })
    res.status(201).send(videoDetails)
})

route.post('/', (req, res) => {
    const{title, image, description, timestamp, channel} = req.body;
    videosData.push({
        id:uuidv4(),
        title: title,
        channel: "channel",
        image: image,
        description: description,
        views: 0,
        likes: 0,
        duration: timestamp,
        timestamp: timestamp,
    });
    fs.writeFileSync('data/videos.json', JSON.stringify(videosData));
    res.json(videosData)
})

module.exports = route;