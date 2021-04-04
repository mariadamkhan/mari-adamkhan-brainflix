import React from "react";
import IconEye from "../../../assets/icons/Icon-views.svg";
import IconLike from "../../../assets/icons/Icon-likes.svg";

function Details({ defaultVideo }) {
  const postDate = new Date(defaultVideo.timestamp);
  return (
    <div className="videos__details">
      <h1 className="videos__title">{defaultVideo.title}</h1>
      <div className="videos__container">
        <h4 className="videos__channel">{defaultVideo.channel}</h4>
        <span className="videos__date">{postDate.toLocaleDateString()}</span>
      </div>
      <div className="videos__container-two">
        <img className="videos__icon-eye" src={IconEye} alt="Views Icon" />
        <span className="videos__views"> {defaultVideo.views}</span>
        <img className="videos__icon-like" src={IconLike} alt="Likes Icon" />
        <span className="videos__likes">{defaultVideo.likes}</span>
      </div>
      <p className="videos__description">{defaultVideo.description}</p>
    </div>
  );
}

export default Details;
