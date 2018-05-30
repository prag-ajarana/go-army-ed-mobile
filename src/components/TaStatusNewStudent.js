import React from 'react'
import { hot } from 'react-hot-loader'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import fileAlt from '@fortawesome/fontawesome-free-solid/faFileAlt'
import { NavLink } from 'react-router-dom'

const TaStatusNewStudent = () => {
  return (
    <div className="overall">
      <main>
        <section className="case">
          <div className="caseHeader">
            <FontAwesomeIcon icon={fileAlt} />
            <h2>Case 2017-03</h2>
          </div>

          <ul className="nobullets">
            <li className="tableRow"><span className="tableHeader">Type</span> <span>TA</span></li>
            <li className="tableRow"><span className="tableHeader">Status</span> <span>Complete</span></li>
            <li className="tableRow"><span className="tableHeader">Date completed</span> <span>04/09/2017</span></li>
          </ul>
        </section>

        <section className="case">
          <div className="caseHeader">
            <FontAwesomeIcon icon={fileAlt} />
            <h2>Case 2016-02</h2>
          </div>

          <ul className="nobullets">
            <li className="tableRow"><span className="tableHeader">Type</span> <span>TA</span></li>
            <li className="tableRow"><span className="tableHeader">Status</span> <span>Complete</span></li>
            <li className="tableRow"><span className="tableHeader">Date completed</span> <span>04/11/2016</span></li>
          </ul>
        </section>

        <section className="case">
          <div className="caseHeader">
            <FontAwesomeIcon icon={fileAlt} />
            <h2>Case 2015-01</h2>
          </div>

          <ul className="nobullets">
            <li className="tableRow"><span className="tableHeader">Type</span> <span>TA</span></li>
            <li className="tableRow"><span className="tableHeader">Status</span> <span>Complete</span></li>
            <li className="tableRow"><span className="tableHeader">Date completed</span> <span>04/05/2015</span></li>
          </ul>
        </section>

        <section className="case">
          <div className="caseHeader">
            <FontAwesomeIcon icon={fileAlt} />
            <h2>Case 2014-01</h2>
          </div>

          <ul className="nobullets">
            <li className="tableRow"><span className="tableHeader">Type</span> <span>TA</span></li>
            <li className="tableRow"><span className="tableHeader">Status</span> <span>Complete</span></li>
            <li className="tableRow"><span className="tableHeader">Date completed</span> <span>04/12/2014</span></li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default hot(module)(TaStatusNewStudent)
