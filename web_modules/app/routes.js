import React, { Component } from "react"
import { Route } from "react-router"
import { Provider } from 'react-redux'
import LayoutContainer from "../LayoutContainer"
import PhenomicPageContainer from "phenomic/lib/PageContainer"
import store from './store'
import Page from "../layouts/Page"
import PageError from "../layouts/PageError"
import PageLoading from "../layouts/PageLoading"
import Homepage from "../layouts/Homepage"
import Training from "../layouts/Training"
import Contact from "../layouts/Contact"
import Blog from "../layouts/Blog"
import Post from "../layouts/Post"

class PageContainer extends Component {
  render() {
    const { props } = this
    return (
      <PhenomicPageContainer
        { ...props }
        layouts={ {
          Page,
          PageError,
          PageLoading,
          Homepage,
          Contact,
          Post,
          Blog,
          Training,
        } }
      />
    )
  }
}
// console.log('store', store.getState())
export default (
  <Provider store={store}>
    <Route component={ LayoutContainer }>
      <Route path="*" component={ PageContainer } />
    </Route>
  </Provider>
)
