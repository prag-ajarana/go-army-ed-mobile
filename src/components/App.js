import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import TaStatusPage from './TaStatusPage'
import CommonApplication from './CommonApplication'
import Hamburger from './Hamburger'
import Tests from './Tests'
import DemographicInfo from './DemographicInfo'
import Training from './Training'
import PriorEducation from './PriorEducation'
import Homeschool from './Homeschool'

const App = () => (
  <BrowserRouter>
    <div className="overall">
      <Header />

      <Route exact path="/ta" component={TaStatusPage}></Route>
      <Route exact path="/ta/common-app" component={CommonApplication}></Route>
      <Route exact path="/more" component={Hamburger} />

      <Route exact path="/ta/tests" component={Tests}></Route>
      <Route exact path="/ta/demo" component={DemographicInfo}></Route>
      <Route exact path="/ta/training" component={Training}></Route>
      <Route exact path="/ta/priorEd" component={PriorEducation}></Route>
      <Route exact path="/ta/homeschool" component={Homeschool}></Route>


      <Footer />
    </div>
  </BrowserRouter>
)

export default App
