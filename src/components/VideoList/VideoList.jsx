import React from "react";
import "./VideoList.scss";

function VideoList({ upNextVideo, updateVideos }) {
  return (
    <>
      <h2 className="video-list__title">Next Video</h2>
      {upNextVideo.map((video) => {
        return (
          <div key={video.id}className="video-list__body">
            <img onClick={()=>{updateVideos(video.id)}}className="video-list__video" src={video.image} alt="Video Thumbnail" />
            <div className="video-list__container">
               <h4 onClick={()=>{updateVideos(video.id)}} className="video-list__title">{video.title}</h4>
               <span onClick={()=>{updateVideos(video.id)}} className="video-list__channel">{video.channel}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default VideoList;
