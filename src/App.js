import "./App.scss";
import "./styles/global.scss";
import Nav from "./components/Nav/Nav";
import videosData from "./data/video-details.json";
import CurrentVideo from "./components/Videos/Current/CurrentVideo";
import Details from "./components/Videos/VideoDetails/Details";
import Form from "./components/Comments/Form/Form";
import DefaultComments from "./components/Comments/UserComments/DefaultComments";
import VideoList from "./components/VideoList/VideoList";
import React from "react";

class App extends React.Component {
  state = {
    defaultVideo: videosData.filter((video) => video.id === "1af0jruup5gu").shift(),
    upNextVideo: videosData.filter((video) => video.id !== "1af0jruup5gu")
  };


  updateVideos = (newVideo) => {
    this.setState({
      defaultVideo: videosData.filter((video) => video.id === newVideo).shift(),
      upNextVideo: videosData.filter((video) => video.id !== newVideo),
    });
  };

  render() {
    return (
      <>
        <header>
          <Nav />
          <section className="hero">
            <CurrentVideo defaultVideo={this.state.defaultVideo} />
          </section>
        </header>
        <main>
          <article className="container"> 
          <section className="description">
            <Details defaultVideo={this.state.defaultVideo} />
          </section>
          <section className="comments">
            <Form defaultVideo={this.state.defaultVideo} />
          </section>
          <section className="default-comments">
            <DefaultComments defaultVideo={this.state.defaultVideo} />
          </section>
          </article>
        <aside>
        <section className="video-list">
            <VideoList
              upNextVideo={this.state.upNextVideo}
              updateVideos={this.updateVideos}
            />
          </section>
        </aside>
        </main>
      </>
    );
  }
}

export default App;
