import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import handsHelping from '@fortawesome/fontawesome-free-solid/faHandsHelping'
import comments from '@fortawesome/fontawesome-free-solid/faComments'
import user from '@fortawesome/fontawesome-free-solid/faUser'
import bars from '@fortawesome/fontawesome-free-solid/faBars'
import { NavLink } from 'react-router-dom';

const stuff = (stuff) => {
  console.log(stuff)
}

const Footer = () => (
  <footer className="bottomMenu">
    <NavLink to={"/ta"} className="footerChild" activeClassName={"active"}>
      <FontAwesomeIcon icon={handsHelping} />
      <p>TA</p>
    </NavLink>

    <NavLink exact to={"/counseling"} className="footerChild" activeClassName={"active"}>
      <FontAwesomeIcon icon={comments} />
      <p>Counseling</p>
    </NavLink>

    <NavLink exact to={"/account"} className="footerChild" activeClassName={"active"}>
      <FontAwesomeIcon icon={user} />
      <p>Account</p>
    </NavLink>

    <NavLink exact to={"/more"} className="footerChild" activeClassName={"active"}>
      <FontAwesomeIcon icon={bars} />
      <p>More</p>
    </NavLink>
  </footer>
)

export default Footer
