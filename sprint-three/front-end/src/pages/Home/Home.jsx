import axios from "axios";
import React, { Component } from "react";
import "../../styles/global.scss";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Form from "../../components/Form/Form";
import DefaultComments from "../../components/DefaultComments/DefaultComments";
import VideoList from "../../components/VideoList/VideoList";
import { API_KEY } from "../../App";

const videosUrl = 'http://localhost:8080';
export default class Home extends Component {
  state = {
    defaultVideo: null,
    upNextVideo: null,
  };

  componentDidMount = () => {
    return axios
      .get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
      .then((res) => {
        this.setState({
          upNextVideo: res.data,
        });
        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/${res.data[0].id}${API_KEY}`
          )
          .then((res) => {
            this.setState({
              defaultVideo: res.data,
            });
          });
      })
      .catch((error) => {
        console.error("Error in making a GET request", error);
      });
  };

  componentDidUpdate = () => {
    const videoId = this.props.match.params.id
      ? this.props.match.params.id
      : this.state.upNextVideo[0].id;
    if (
      this.state.defaultVideo !== null &&
      this.state.defaultVideo.id !== this.props.match.params.id
    ) {
      return axios
        .get(`https://project-2-api.herokuapp.com/videos/${videoId}${API_KEY}`)
        .then((res) => {
          this.setState({
            defaultVideo: res.data,
          });
        })

        .catch((error) => {
          console.error("Error in making a GET request", error);
        });
      //  .then(()=> {window.scrollTo(0,0)})
    }
  };

  render() {
    return (
      this.state.defaultVideo &&
      this.state.upNextVideo && (
        <>
          <section className="hero">
            <CurrentVideo image={this.state.defaultVideo.image} />
          </section>
          <main>
            <article className="container">
              <section className="description">
                <VideoDetails defaultVideo={this.state.defaultVideo} />
              </section>
              <section className="comments">
                <Form />
              </section>
              <section className="default-comments">
                <DefaultComments comments={this.state.defaultVideo.comments} />
              </section>
            </article>
            <aside>
              <section className="video-list">
                <VideoList
                  upNextVideo={this.state.upNextVideo}
                  routerProp={this.props}
                />
              </section>
            </aside>
          </main>
        </>
      )
    );
  }
}
