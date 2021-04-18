const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const videosData = require('../data/videos.json');
const videosRoute = express.Router();
videosRoute.use(express.json());


videosRoute.get('/', (_req, res) => {
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

videosRoute.get('/:videoId', (req, res) => {
    let videoId = req.params.videoId;
    let videoDetails = videosData.find(video => {
        return video.id === videoId
    })
    res.status(201).send(videoDetails)
})

videosRoute.post('/', (req, res) => {
    const{title, image, description, timestamp} = req.body;
    console.log(req.body)
    videosData.push({
        id:uui.v4(),
        title: title,
        channel: 'channel',
        image: image,
        description: 'description',
        views: 0,
        likes: 0,
        duration: 'duration',
    });
    fs.writeFileSync('../data/videos.json', JSON.stringify(videosData));
    res.json(videosData)
})

module.exports = videosRoute;