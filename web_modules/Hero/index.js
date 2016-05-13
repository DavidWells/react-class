import React, { Component } from "react"
import BrowserFrame from '../BrowserFrame'
import styles from './Hero.css'
import image from '../styles/images/react-hexagon.png'
import screen from '../styles/images/homepage.png'
export default class Hero extends Component {

  render() {
    return (
      <div className={`${styles.wrapper} section hero`}>
        <div className="container">
          <h2 className={styles.title}>
            React and JavaScript Training
          </h2>
          <div className="row">
            <div className="one-half column">
            <h4 className={styles.heading + " hero-heading"}>
              Learn how to build modern web applications with React.
            </h4>
            <div className={styles.buttons}>
            <a className={styles.link1 + " button button-secondary"} href="/training">
              Learn More
            </a>
            <a className="button button-primary" href="http://register.reactclass.com">
              Register
            </a>
            </div>
            </div>
            <div className={styles.heroImage +" one-half column phones"}>
              <BrowserFrame image={screen} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
