import React from 'react'
import { hot } from 'react-hot-loader'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import phone from '@fortawesome/fontawesome-free-solid/faPhone'
import graduationCap from '@fortawesome/fontawesome-free-solid/faGraduationCap'
import alignLeft from '@fortawesome/fontawesome-free-solid/faAlignLeft'
import question from '@fortawesome/fontawesome-free-solid/faQuestion'

const Hamburger = () => (
  <ul className="hamburgerMenu">
    <li>
      <FontAwesomeIcon icon={phone} />
      <span>Request Technical Support</span>
    </li>
    <li>
      <FontAwesomeIcon icon={graduationCap} />
      <span>Education Centers</span>
    </li>
    <li>
      <FontAwesomeIcon icon={alignLeft} />
      <span>Programs and Services</span>
    </li>
    <li>
      <FontAwesomeIcon icon={question} />
      <span>FAQ</span>
    </li>
  </ul>
)

export default hot(module)(Hamburger)
