import React from "react";
import IconEye from "../../assets/icons/Icon-views.svg";
import IconLike from "../../assets/icons/Icon-likes.svg";
import "./VideoDetails.scss";

function VideoDetails({ defaultVideo }) {
  const postDate = new Date(defaultVideo.timestamp);
  return (
    <div className="description__details">
      <h1 className="description__title">{defaultVideo.title}</h1>
      <div className="description__wrap">
        <div className="description__container">
          <h4 className="description__channel">By {defaultVideo.channel}</h4>
          <span className="description__date">{postDate.toLocaleDateString()}</span>
        </div>
        <div className="description__container-two">
          <div className="description__watched">
            <img className="description__icon-eye" src={IconEye} alt="Views Icon" />
            <span className="description__views"> {defaultVideo.views}</span>
          </div>
          <div className="description__liked">
            <img className="description__icon-like" src={IconLike}alt="Likes Icon"/>
            <span className="description__likes">{defaultVideo.likes}</span>
          </div>
        </div>
      </div>
      <p className="description__description">{defaultVideo.description}</p>
    </div>
  );
}

export default VideoDetails;
