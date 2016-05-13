import React, { Component } from "react"
import styles from './MovingHero.css'
import image from '../styles/images/react-hexagon.png'

export default class MovingHero extends Component {

  render() {
    return (
      <div className={`${styles.wrapper}`}>
        <ul className={styles['bg-bubbles']}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}
