import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import printer from '@fortawesome/fontawesome-free-solid/faPrint'
import refresh from '@fortawesome/fontawesome-free-solid/faSync'
import trash from '@fortawesome/fontawesome-free-solid/faTrashAlt'
import save from '@fortawesome/fontawesome-free-solid/faSave'
import edit from '@fortawesome/fontawesome-free-solid/faEdit'

const CommonAppTaMenu = () => (
  <div className="dropdown common-app">
    <ul>
      <li className="dropdownRow">
        <FontAwesomeIcon icon={refresh} /> <span>Refresh</span>
      </li>
      <li className="dropdownRow">
        <FontAwesomeIcon icon={printer} /> <span>Print</span>
      </li>
      <li className="dropdownRow">
        <FontAwesomeIcon icon={trash} /> <span>Trash</span>
      </li>
      <li className="dropdownRow">
        <FontAwesomeIcon icon={save} /> <span>Save</span>
      </li>
      <li className="dropdownRow">
        <FontAwesomeIcon icon={edit} /> <span>Edit</span>
      </li>
    </ul>
  </div>
)

export default CommonAppTaMenu
