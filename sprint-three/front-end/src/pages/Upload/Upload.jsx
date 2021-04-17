import React, { Component } from 'react'
import "./Upload.scss"



export default class Upload extends Component {
    handleOnSubmit = (event) => {
      alert("Upload Complete")
      event.preventDefault()
      this.props.history.push('/');

    }
    render() {
        return (
            <section className="upload">
                <h1 className="upload__title">Upload Video</h1>
                    <form onSubmit={this.handleOnSubmit} className="upload__form" id="uploadForm" name="uploadForm">
                        <div className="upload__form-container">
                            <div className="upload__thumbnail-body">
                                <label htmlFor="upload" className="upload__heading-video">Video Thumbnail</label>
                                <div className="upload__thumbnail"></div>
                            </div>
                            <div className="upload__input-body">
                                <label htmlFor="uploadInputTitle" className="upload__heading-title">Title Your Video</label>
                                <input type="text" className="upload__input-title" id="uploadInputTitle" name="uploadInputTitle" placeholder="Add a title to your video" required/>
                                <label htmlFor="uploadInputDescription" className="upload__heading-description">Add a Video Description</label>
                                <textarea type="text"className="upload__input-description" id="uploadInputDescription" name="UploadInputDescription" cols="20" rows="5"placeholder="Add a description of your video" required/>
                            </div>
                        </div>
                        <div className="upload__cta-container">
                            <p className="upload__cancel">Cancel</p>
                            <button className="upload__cta-upload"id="uploadUpload" type="submit">Publish</button>
                        </div>
                    </form>
               
            </section>
        )
    }
}
