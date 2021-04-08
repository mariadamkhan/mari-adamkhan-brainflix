import React from "react";
import "./CurrentVideo.scss";

function CurrentVideo({ defaultVideo }) {
  return (
    <>
      <video className="hero__video" poster={defaultVideo.image} controls></video>
    </>
  );
}

export default CurrentVideo;
