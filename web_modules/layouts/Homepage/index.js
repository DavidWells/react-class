import React, { Component, PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import Hero from "../../Hero"
import FullWidthPage from "../FullWidthPage"

const numberOfLatestPosts = 6

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { layout: "Post" },
      sort: "date",
      reverse: true,
    })
    .slice(0, numberOfLatestPosts)

    return (
      <FullWidthPage { ...this.props} hideTitle>
        <Hero />
        <div className="section values">
        <div className='container'>
          <div className="value-props row">
            <div className="four columns value-prop">
              <img className="value-img" src="images/feather.svg"/>
              Learn what is React and how you can use it to transform your workflow
            </div>
            <div className="four columns value-prop">
              <img className="value-img" src="images/pens.svg" />
              Think in React and build your first app using defacto industry tools
            </div>
            <div className="four columns value-prop">
              <img className="value-img" src="images/watch.svg"/>
              Build complex applications with React using Redux for state management
            </div>
          </div>
        </div>
        </div>
      </FullWidthPage>
    )
  }
}
