import React, { Component, PropTypes } from "react"
import Page from "../Page"

export default class Contact extends Component {

  render() {

    return (
      <Page { ...this.props} >
          <div className="docs-example docs-example-htmlForms">
            <form lphtmlFormnum="1">
              <div className="row">
                <div className="six columns">
                  <label htmlFor="exampleEmailInput">Name</label>
                  <input className="u-full-width" type="text"  />
                </div>
                <div className="six columns">
                  <label htmlFor="exampleEmailInput">Email</label>
                  <input className="u-full-width" type="email"  />
                </div>
              </div>

              <div className="row">
                <div className="six columns">
                  <label htmlFor="exampleEmailInput">Company</label>
                  <input className="u-full-width" type="text" />
                </div>
                <div className="six columns">
                   <label htmlFor="exampleEmailInput">Phone</label>
                  <input className="u-full-width" type="text" />
                </div>
              </div>
              <label htmlFor="exampleMessage">Message</label>
              <textarea className="u-full-width" placeholder="Hi Dave …">
              </textarea>

              <input
                className="button-primary"
                type="submit"
              />
            </form>
          </div>
      </Page>
    )
  }
}
