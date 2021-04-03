import React from "react";
import "./CurrentVideo.scss";

function CurrentVideo({ defaultVideo }) {
  return (
    <>
      <video className="videos__hero" poster={defaultVideo.image} controls></video>
    </>
  );
}

export default CurrentVideo;
