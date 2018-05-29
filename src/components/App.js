import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import TuitionAssistance from './TuitionAssistance'
import Hamburger from './Hamburger'
import '../scss/stylesheet.scss'
import 'normalize.css'

const App = () => (
  <BrowserRouter>
    <div className="overall">
      <Header />

      <Switch>
        <Route path="/ta" component={TuitionAssistance}></Route>
        <Route exact path="/more" component={Hamburger} />
      </Switch>
      
      <Footer />
    </div>
  </BrowserRouter>
)

export default App
