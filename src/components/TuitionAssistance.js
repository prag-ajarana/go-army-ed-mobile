import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'
import TaStatus from './TaStatus'
import CommonApp from './common-app/CommonApp'
import CoursePlanner from './course-planner/index'

const TuitionAssistance = (props) => {
  
  return (
    <div className="overall">
      <Switch>
        <Route exact path={`/ta`} component={TaStatus}></Route>
        <Route path={`/ta/common-app`} component={CommonApp}></Route>
        <Route path={`/ta/course-planner`} component={CoursePlanner}></Route>
      </Switch>
    </div>
  )
}

export default hot(module)(TuitionAssistance)
