import React, { Component, PropTypes } from "react"
import styles from './HomePage.css'
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
            <div className="one-third column value">
              <div className={styles.reactLogo}>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="570" height="510" viewBox="0, 0, 570, 510">
                <g id="Layer_1">
                  <path d="M334.696,254.628 C334.696,282.334 312.235,304.795 284.529,304.795 C256.823,304.795 234.362,282.334 234.362,254.628 C234.362,226.922 256.823,204.461 284.529,204.461 C312.235,204.461 334.696,226.922 334.696,254.628 z" fill="#00D8FF"/>
                  <path d="M284.529,152.628 C351.885,152.628 414.457,162.293 461.636,178.535 C518.48,198.104 553.43,227.768 553.43,254.628 C553.43,282.619 516.389,314.131 455.347,334.356 C409.196,349.647 348.468,357.628 284.529,357.628 C218.975,357.628 156.899,350.136 110.239,334.187 C51.193,314.005 15.628,282.084 15.628,254.628 C15.628,227.986 48.998,198.552 105.043,179.012 C152.398,162.503 216.515,152.628 284.529,152.628 z" fillOpacity="0" stroke="#00D8FF" strokeWidth="24" strokeMiterlimit="10"/>
                  <path d="M195.736,203.922 C229.385,145.574 269.017,96.198 306.656,63.442 C352.006,23.976 395.163,8.519 418.431,21.937 C442.679,35.92 451.473,83.751 438.498,146.733 C428.688,194.351 405.264,250.945 373.322,306.334 C340.573,363.122 303.072,413.153 265.945,445.606 C218.964,486.674 173.545,501.535 149.76,487.819 C126.681,474.509 117.854,430.898 128.926,372.586 C138.281,323.316 161.758,262.841 195.736,203.922 z" fillOpacity="0" stroke="#00D8FF" strokeWidth="24" strokeMiterlimit="10"/>
                  <path d="M195.821,306.482 C162.075,248.19 139.09,189.195 129.509,140.227 C117.965,81.228 126.127,36.118 149.373,22.661 C173.597,8.637 219.428,24.905 267.513,67.601 C303.869,99.881 341.201,148.438 373.236,203.774 C406.08,260.507 430.697,317.983 440.272,366.356 C452.389,427.569 442.581,474.34 418.819,488.096 C395.762,501.444 353.57,487.312 308.58,448.597 C270.567,415.886 229.898,365.344 195.821,306.482 z" fillOpacity="0" stroke="#00D8FF" strokeWidth="24" strokeMiterlimit="10"/>
                </g>
              </svg>
              </div>
              <h5 className="value-heading">Core React Methodologies</h5>
              <p className="value-description">Learn what is React and how you can use it to transform your workflow</p>
            </div>


            <div className="one-third column value">
                <div className={styles.reactLogo}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100"><path fill="#000000" d="M94.964,17.623h-0.043c-0.371-1.91-2.051-3.355-4.07-3.355H9.149c-2.024,0-3.706,1.452-4.073,3.369h-0.04  C5.026,17.744,5,17.846,5,17.953v0.465v36.318v17.519c0,2.291,1.858,4.151,4.149,4.151h30.977v5.965H26.892v3.362h46.217v-3.362  H59.875v-5.965h30.977c2.289,0,4.148-1.86,4.148-4.151V54.736V18.418v-0.465C95,17.841,94.976,17.735,94.964,17.623z M91.12,70.759  H8.884H8.849V56.023h0.035V20.106H91.12V70.759z"/>
                </svg>
                </div>
                <h5 className="value-heading">Building an app</h5>
                <p className="value-description">Think in React and build your first app using defacto industry tools</p>
            </div>

            <div className="one-third column value">
                <div className={styles.reactLogo}>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100"><g><path d="M73.75,24.317v9.826h-9.065v-2.121l-3.979,2.785l3.979,3.053v-2.123h9.065v9.824h21.249V24.317H73.75z M91.812,42.374   H76.937V27.503h14.876V42.374z"/><path d="M43.626,64.114H16.417V45.562h9.827V34.845l3.931,3.016v-2.123h9.242v9.824h21.245V24.317H39.417v9.826h-9.242v-2.121   l-3.931,2.752V24.317H4.999v21.244h9.822v20.146h28.805v2.148l3.98-2.787l-3.98-3.051V64.114z M42.604,27.503h14.874v14.871H42.604   V27.503z M8.186,42.374V27.503H23.06v14.871H8.186z"/><rect x="49.333" y="45.8" width="1.594" height="0.795"/><rect x="49.333" y="54.562" width="1.594" height="1.592"/><rect x="49.333" y="57.745" width="1.594" height="1.592"/><rect x="49.333" y="60.931" width="1.594" height="1.592"/><rect x="49.333" y="51.372" width="1.594" height="1.592"/><rect x="49.333" y="48.188" width="1.594" height="1.592"/><rect x="49.333" y="64.114" width="1.594" height="1.594"/><rect x="55.308" y="64.114" width="1.46" height="1.594"/><rect x="52.386" y="64.114" width="1.461" height="1.594"/><polygon points="57.429,67.856 61.411,65.069 57.429,62.019  "/><path d="M72.957,54.177c-5.937,0-10.751,4.816-10.751,10.752c0,5.938,4.814,10.754,10.751,10.754   c5.938,0,10.752-4.816,10.752-10.754C83.709,58.993,78.896,54.177,72.957,54.177z"/></g></svg>
                </div>
                <h5 className="value-heading">State management</h5>
                <p className="value-description">Build large applications with React using Redux for state management</p>
            </div>

          </div>
        </div>
        </div>
      </FullWidthPage>
    )
  }
}
