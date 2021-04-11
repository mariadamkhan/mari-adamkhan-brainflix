import React from "react";
import "./CurrentVideo.scss";

function CurrentVideo({ image }) {
  return (
    <>
      <video className="hero__video" poster={image} controls></video>
    </>
  );
}

export default CurrentVideo;
