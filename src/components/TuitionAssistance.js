import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TaStatusPage from './TaStatusPage'
import CommonApp from './common-app/CommonApp'
import ContactInfo from './common-app/ContactInfo'
import Tests from './common-app/Tests'
import Demographics from './common-app/Demographics'
import Training from './common-app/Training'
import PriorEducation from './common-app/PriorEducation'
import Homeschool from './common-app/Homeschool'

const TuitionAssistance = (props) => {
  return (
    <div className="overall">
      <Switch>
        <Route exact path="/ta" component={TaStatusPage}></Route>

        <Route path={`${props.match.path}/common-app`} component={CommonApp}></Route>
      </Switch>
    </div>
  )
}

export default hot(module)(TuitionAssistance)
