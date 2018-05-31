import React from 'react'
import { hot } from 'react-hot-loader'
import { NavLink } from 'react-router-dom'

const navOptions = [
  {
    label: 'Contact Information',
    path: 'contact-info'
  },
  {
    label: 'Tests',
    path: 'tests'
  },
  {
    label: 'Demographics',
    path: 'demographics'
  },
  // {
  //   label: 'Training',
  //   path: 'training'
  // },
  {
    label: 'Prior Education',
    path: 'prior-education'
  },
  {
    label: 'Home School and Degree Plan',
    path: 'degree-plan'
  },
  {
    label: 'Review and Submit',
    path: 'review-and-submit'
  }
]

const Navigation = (props) => {
  let NavSections = navOptions.map((option, i) => (
    <NavLink key={i} to={`${props.currentPath}/${option.path}`} className="tocSection" activeClassName={"activeCommonNav"}>
      <p>{option.label}</p>
    </NavLink>
  ))

  console.log(NavSections)

  return (
    <nav className="tableOfContents">
      {NavSections}
    </nav>
  )
}

export default hot(module)(Navigation)
