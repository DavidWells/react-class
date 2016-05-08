import React, { Component } from "react"
import test from '../styles/images/iphone.png'

export default class Hero extends Component {

  render() {
    return (
      <div className="section hero">
        <div className="container">
          <div className="row">
            <div className="one-half column">
            <h4 className="hero-heading">
              Learn how to build React applications from setup to deployment.
            </h4>
            <a className="button button-primary" href="http://getskeleton.com">
              Register
            </a>
            </div>
            <div className="one-half column phones">
              <img className="phone" src={test} />
              <img className="phone" src={test} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
