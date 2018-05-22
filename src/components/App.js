import React from 'react'
import { hot } from 'react-hot-loader'
import '../scss/stylesheet.scss'

const helloWorld = () => {
  console.log('asdfasdf')
}

const App = () => (
  <div className="overall">

    <div>
      <div className="topBar">
        <img className="resize" src="assets/ARBALogo.Small.png" />
        <span>Go Army Ed</span>
      </div>

      <h2>TA Requests</h2>
    </div>
    <div>
        <button className="TA-btn">Request TA</button>
    </div>

    <h1>Case 1234</h1>
    <hr/>
    <ul className="nobullets">
      <li>Type: TA</li>
      <li>Status: Complete</li>
      <li>Date created: 04/14/2017</li>
      <li>Created by: Andres Arana</li>
    </ul>

    <h1>Case 5678</h1>
    <hr/>
    <ul className="nobullets">
      <li>Type: TA</li>
      <li>Status: Complete</li>
      <li>Date created: 04/09/2016</li>
      <li>Created by: Andres Arana</li>
    </ul>

    <div className="bottomMenu">
      <a href="#ta" className="active">TA</a>
      <a href="#counseling">Counseling</a>
      <a href="#account">Account</a>
      <a href="#more">More</a>
    </div>

  </div>
)

export default hot(module)(App)
