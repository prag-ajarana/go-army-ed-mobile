import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import TaStatusPage from './TaStatusPage'
import CommonApplication from './CommonApplication'
import Hamburger from './Hamburger'

const App = () => (
  <BrowserRouter>
    <div className="overall">
      <Header />

      <Route exact path="/ta" component={TaStatusPage}></Route>
      <Route exact path="/ta/common-app" component={CommonApplication}></Route>
      <Route exact path="/more" component={Hamburger} />

      <Footer />
    </div>
  </BrowserRouter>
)

export default App
