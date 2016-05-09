import React, { Component, PropTypes } from "react"
import Hero from "../../Hero"
import FullWidthPage from "../FullWidthPage"

export default class Training extends Component {
  render() {
    return (
      <FullWidthPage { ...this.props} hideTitle>
        <h2>Training</h2>
      </FullWidthPage>
    )
  }
}
