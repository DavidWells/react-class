import React, { Component, PropTypes } from "react"
import { Link } from "react-router"
import logo from '../styles/images/react-class-logo-dark.png'
import styles from "./Header.css"
import Svg from "react-svg-inline"
import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"


const rightNavLinks = [
  {
    text: 'Training',
    href: '/training',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
]

export default class Header extends Component {

  renderLinks() {
    const currentURL = (this.props.url) ? this.props.url.splat : null
    return rightNavLinks.map((link, i) => {
      const active = currentURL === link.href.replace('/', '')
      const activeClass = (active) ? styles.active : ''
      return (
        <Link key={i} className={`${styles.link} ${activeClass}`} to={link.href}>
          <span>{link.text}</span>
        </Link>
      )
    })
  }

  render() {
    const { props } = this
    const currentURL = (props.url) ? props.url.splat : null

    return (
      <div className={ styles.headerWrapper }>
      <header className={ styles.header + ' container'}>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            <Link
              to="/"
            >
             <img src={logo} width='200px' />
            </Link>
          </div>
          <div className={ styles.navPart2 }>
            {/*<a<Link
              className={ styles.link }
              to="/blog"
            >
             Blog
            </Link>
            */}
           {this.renderLinks()}

            {/*<a
              href="https://github.com/reac/phenomic"
              className={ styles.link }
            >
              <Svg svg={ gitHubSvg } />
              { "GitHub" }
            </a>
          */}
          </div>
        </nav>
      </header>
      </div>
    )
  }
}
