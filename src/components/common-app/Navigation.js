import React from 'react'
import { hot } from 'react-hot-loader'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import fancyDot from '@fortawesome/fontawesome-free-solid/faDotCircle'
import { NavLink } from 'react-router-dom'

const Navigation = (props) => (
  <nav className="tableOfContents">
    <NavLink to={`${props.currentPath}/contact-info`} className="tocSection" activeClassName={"activeCommonNav"}>
      <p>Contact Information</p>
    </NavLink>

    <NavLink to={`${props.currentPath}/tests`} className="tocSection" activeClassName={"activeCommonNav"}>
      <p>Tests</p>
    </NavLink>

    <NavLink to={`${props.currentPath}/demographics`} className="tocSection" activeClassName={"activeCommonNav"}>
      <p>Demographics</p>
    </NavLink>

    <NavLink to={`${props.currentPath}/training`} className="tocSection" activeClassName={"activeCommonNav"}>
      <p>Training</p>
    </NavLink>

    <NavLink to={`${props.currentPath}/prior-education`} className="tocSection" activeClassName={"activeCommonNav"}>
      <p>Prior Education</p>
    </NavLink>

    <NavLink to={`${props.currentPath}/degree-plan`} className="tocSection" activeClassName={"activeCommonNav"}>
      <p>Home School and Degree Plan</p>
    </NavLink>

    <NavLink to={`${props.currentPath}/review-and-submit`} className="tocSection" activeClassName={"activeCommonNav"}>
      <p>Review and Submit</p>
    </NavLink>
  </nav>
)

export default hot(module)(Navigation)
