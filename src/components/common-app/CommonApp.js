import React from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom'
import ContactInfo from './ContactInfo'
import Tests from './Tests'
import Demographics from './Demographics'
import Training from './Training'
import PriorEducation from './PriorEducation'
import DegreePlan from './DegreePlan'
import Navigation from './Navigation'

const CommonApp = (props) => {
  let currentPath = props.match.path;

  return (
    <div>
      <Switch>
        <Route exact path={`${currentPath}/contact-info`} component={ContactInfo}></Route>

        <Route exact path={`${currentPath}/tests`} component={Tests}></Route>

        <Route exact path={`${currentPath}/demographics`} component={Demographics}></Route>

        <Route exact path={`${currentPath}/training`} component={Training}></Route>

        <Route exact path={`${currentPath}/prior-education`} component={PriorEducation}></Route>

        <Route exact path={`${currentPath}/degree-plan`} component={DegreePlan}></Route>
      </Switch>

      <Navigation
        currentPath={currentPath}
      />
    </div>
  )
}

export default hot(module)(CommonApp)
