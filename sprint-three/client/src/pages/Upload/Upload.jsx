import React, { Component } from "react";
import "./Upload.scss";
import axios from "axios";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

const URL = "http://localhost:8080";

export default class Upload extends Component {
  state = {
    videosData: [],
  };

  handleNewVideo = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/videos`, {
        title: event.target.uploadInputTitle.value,
        description: event.target.uploadInputDescription.value,
        image: thumbnail,
      })
      .then((res) => {
        alert("Upload Completed");
        event.target.reset();
        this.setState({
          videosData: res.data,
        });
        this.props.history.push("/");
      });
  };
  render() {
    return (
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form
          onSubmit={this.handleNewVideo}
          className="upload__form"
          id="uploadForm"
          name="uploadForm"
        >
          <div className="upload__form-container">
            <div className="upload__thumbnail-body">
              <label htmlFor="upload" className="upload__heading-video">
                Video Thumbnail
              </label>
              <div className="upload__thumbnail"></div>
            </div>
            <div className="upload__input-body">
              <label
                htmlFor="uploadInputTitle"
                className="upload__heading-title"
              >
                Title Your Video
              </label>
              <input
                type="text"
                className="upload__input-title"
                id="uploadInputTitle"
                name="uploadInputTitle"
                placeholder="Add a title to your video"
                required
              />
              <label
                htmlFor="uploadInputDescription"
                className="upload__heading-description"
              >
                Add a Video Description
              </label>
              <textarea
                type="text"
                className="upload__input-description"
                id="uploadInputDescription"
                name="UploadInputDescription"
                placeholder="Add a description of your video"
                required
              />
            </div>
          </div>
          <div className="upload__cta-container">
            <p className="upload__cancel">Cancel</p>
            <button
              className="upload__cta-upload"
              id="uploadUpload"
              type="submit"
            >
              Publish
            </button>
          </div>
        </form>
      </section>
    );
  }
}
