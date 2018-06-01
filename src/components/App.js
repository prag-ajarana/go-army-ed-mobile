import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import TuitionAssistance from './TuitionAssistance'
import Hamburger from './Hamburger'
import '../scss/stylesheet.scss'
import 'normalize.css'

const App = () => (
  <HashRouter>
    <div className="overall">
      <Header />

    
        <Route path="/ta" component={TuitionAssistance}></Route>
        <Route exact path="/more" component={Hamburger} />
      

      <Footer />
    </div>
  </HashRouter>
)

export default App
