import React from "react";
import "./CurrentVideo.scss";

function CurrentVideo({ defaultVideo }) {
  console.log(defaultVideo)
  return (
    <>
      <video className="hero__video" poster={defaultVideo.image} controls></video>
    </>
  );
}

export default CurrentVideo;
