import React from "react";
import videosData from "../../../data/video-details.json";
import CurrentVideo from "../Current/CurrentVideo";
import "../Current/CurrentVideo.scss";
import Details from "../VideoDetails/Details";

class Videos extends React.Component {
  state = {
    defaultVideo: videosData
      .filter((video) => video.id === "1af0jruup5gu")
      .shift(),
    UpNextVideo: videosData.filter((video) => video.id !== "1af0jruup5gu"),
  };

  updateVideos = (newVideo) => {
    this.setState({
      defaultVideo: videosData.filter((video) => video.id === newVideo).shift(),
      UpNextVide: videosData.filter((video) => video.id !== newVideo),
    });
  };

  render() {
    console.log(this.state.defaultVideo);

    return (
      <div className="videos">
        <CurrentVideo defaultVideo={this.state.defaultVideo} />
        <Details defaultVideo={this.state.defaultVideo} />
      </div>
    );
  }
}

export default Videos;
