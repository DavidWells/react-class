import React, { Component, PropTypes } from "react"
import Hero from "../../Hero"
import styles from './style.css'
import MovingHero from '../../MovingHero'
import FullWidthPage from "../FullWidthPage"
// training sections http://codepen.io/miquel/pen/KVXBRQ http://codepen.io/samiralibabic/pen/eZjEjL
// top header? http://codepen.io/acjdesigns/pen/MyXqVq
// top of page? http://codepen.io/harismahmood89/pen/vAoex
export default class Training extends Component {
  render() {
    return (
      <FullWidthPage { ...this.props} hideTitle>
        <div className={styles.titleContainer}>
          <div className="container">
            <h2 className={styles.title}>
              React Training
            </h2>
            <div className={styles.subtitle}>
              Get up to speed with modern UI
            </div>
          </div>

          <MovingHero/>

        </div>

        <section className="container">

            <h2 className="section__title">Curriculum</h2>
            <p className="section__intro">
              Learn how to build a production grade React application from setup through to deployment.
            </p>
            <div className="box__grid">
              <article className="box">
                <div className="box__content">

                  <h3 className="box__title">Introduction</h3>
                  <ul>
                    <li>What is React</li>
                    <li>Why choose React</li>
                    <li>The power of React</li>
                    <li>How React is Future Proof</li>
                  </ul>
                 </div>
                </article>
              <article className="box">
                <div className="box__content">

                    <h3 className="box__title">Core Concepts</h3>
                    <ul>
                      <li>Thinking in React</li>
                      <li>State vs Props</li>
                      <li>Single Page Apps</li>
                      <li>SEO</li>
                    </ul>
                </div>
              </article>
              <article className="box">
                <div className="box__content">

                  <h3 className="box__title">Project Setup</h3>
                  <ul>
                    <li>Using Webpack</li>
                    <li>Compiling with Babel</li>
                    <li>Hot Module Reloading</li>
                    <li>Using CSS Modules</li>
                  </ul>
                </div>
              </article>

              <article className="box">
                <div className="box__content">

                  <h3 className="box__title">Build</h3>
                  <ul>
                    <li>Project Structure</li>
                    <li>Application architecture</li>
                    <li>Building for Production</li>
                    <li>Performance optimization</li>
                  </ul>
                </div>
              </article>

              <article className="box">
                <div className="box__content">

                  <h3 className="box__title">Routing</h3>
                  <ul>
                    <li>How to handle routing</li>
                    <li>Using React Router</li>
                    <li>Making a multi-page application</li>
                    <li>Nested route handling</li>
                  </ul>
                </div>
              </article>

              <article className="box">
                <div href="#" className="box__content">

                  <h3 className="box__title">Testing</h3>
                  <ul>
                    <li>Intro to unit testing</li>
                    <li>Introduction to Enzyme and Ava</li>
                    <li>Testing in React</li>
                  </ul>
                </div>
              </article>
            </div>

        </section>

      </FullWidthPage>
    )
  }
}
