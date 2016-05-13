import React, { Component, PropTypes } from "react"
import styles from './Page.css'
import Helmet from "react-helmet"
import invariant from "invariant"

class Page extends Component {
  render() {
    const { props, context } = this

    const {
      pkg,
    } = context.metadata

    const {
      __filename,
      __url,
      head,
      body,
      header,
      footer,
      hideTitle,
    } = props

    invariant(
      typeof head.title === "string",
      `Your page '${ __filename }' needs a title`
    )

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const showFooter = (head.footer === false) ? false : true

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      { property: "og:url", content: __url },
      { property: "og:description", content: head.description },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:creator", content: `@${ pkg.twitter }` },
      { name: "twitter:description", content: head.description },
      { name: "description", content: head.description },
    ]

    return (
      <div className='container'>
        <Helmet
          title={ metaTitle }
          meta={ meta }
        />

        {
          !hideTitle && head.title &&
          <h1 className={styles.title}>{ head.title }</h1>
        }

        { header }

        {
          body &&
          <div
            dangerouslySetInnerHTML={ { __html: body } }
          />
        }
        { props.children }
        { showFooter && footer }
      </div>
    )
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  hideTitle: PropTypes.bool,
  body: PropTypes.string.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.defaultProps = {
  hideTitle: false,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
