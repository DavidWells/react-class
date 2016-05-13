import React, { Component } from "react"
import styles from './BrowserWindow.css'

export default class BrowserWindow extends Component {

  render() {
    return (
      <div className="featured-image">
        <div className="browser-top">
          <div className="row">
            <div className="frame">
              <i className="dot"></i>
            </div>
            <div className="cell">
              <div className="address-bar">Learn ReactJS</div>
            </div>
          </div>
        </div>
        <div className="image-frame">
          <img alt="Medium_signschool" src={this.props.image} />
        </div>
      </div>
    )
  }
}
