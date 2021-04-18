import React from "react";
import "./VideoList.scss";
import {Link} from "react-router-dom";

function VideoList({upNextVideo}) {
  return (
    <>
      <h2 className="video-list__category">Next Video</h2>
      {upNextVideo.map((video) => {
        return (
         
          <Link to={`/videos/${video.id}`} key={video.id} className="video-list__link"><div className="video-list__body">
          <img className="video-list__video" src={video.image} alt="Video Thumbnail" />
          <div className="video-list__container">
          <h4  className="video-list__title">{video.title}</h4>
          <span  className="video-list__channel">{video.channel}</span>
          </div>
          </div></Link>
        );
      })}
    </>
  );
}

export default VideoList;
