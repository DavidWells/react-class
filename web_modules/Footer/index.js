import React, { Component } from "react"
import { Link } from "react-router"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import heart from '../styles/images/heart.svg'
import styles from "./index.css"

class Footer extends Component {

  render() {
    const { location, pages } = this.props
    // console.log('fotter props', this.props)
    // console.log('location', this.props.location)
    const current = pages[`/${location.pathname}`]

    let foot
    if (current && current.head && current.head.hideFooter) {
      foot = null
    } else {
      foot = (
        <div>
          <section className={styles.ctaWrapper}>
              <div className={styles.flex + " container"}>
                <h2 className={styles.cta}>Need one on one training? Get in touch with us</h2>
                <Link to="/contact" className={styles.button}>
                  Contact Us
                </Link>
              </div>
          </section>
            <footer className={ styles.footer }>
              <div>Made with
                <span className={styles.heart}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 107.635"><path d="M72.748 0C55.736 0 50 15.1 50 15.1S44.27 0 27.252 0C10.245 0 0 16.214 0 29.578c0 22.396 50 56.53 50 56.53s50-34.126 50-56.526C100 16.214 89.76 0 72.748 0z"/></svg></span> by
                <a className={ styles.twitter }
                  target='_blank'
                  href="http://twitter.com/davidwells">@DavidWells</a>
              </div>
              <a
                href="https://phenomic.io/"
                target='_blank'
                className={ styles.link }
              >
                { "Site Powered by " }
                <span className={ styles.reference }>
                  {  "<Phenomic />" }
                </span>
              </a>
            </footer>
        </div>
      )
    }

    if (location && location.pathname !== 'contact/') {

    }

    return (
      <div>
        {foot}
      </div>
    )
  }
}

function mapStateToProps({pages}) {
  return {
    pages: pages,
  }
}

export default connect(
  mapStateToProps
)(Footer)
