import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'
import TaStatus from './TaStatus'
import CommonApp from './common-app/CommonApp'
import RequestTA from './request-ta/RequestTA'
import Enroll from './request-ta/Enroll'

const TuitionAssistance = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path={`/ta`} component={TaStatus}></Route>
        <Route path={`/ta/common-app`} component={CommonApp}></Route>
        <Route exact path={`/ta/request-ta`} component={RequestTA}></Route>
        <Route path={`/ta/request-ta/enroll`} component={Enroll}></Route>
      </Switch>
    </div>
  )
}

export default hot(module)(TuitionAssistance)
