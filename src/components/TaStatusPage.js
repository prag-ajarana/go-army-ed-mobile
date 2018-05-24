import React from 'react'
import { hot } from 'react-hot-loader'
import '../scss/stylesheet.scss'
import 'normalize.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ellipsis from '@fortawesome/fontawesome-free-solid/faEllipsisV'
import fileAlt from '@fortawesome/fontawesome-free-solid/faFileAlt'
import printer from '@fortawesome/fontawesome-free-solid/faPrint'
import refresh from '@fortawesome/fontawesome-free-solid/faSync'
import angleRight from '@fortawesome/fontawesome-free-solid/faAngleRight'
import { NavLink } from 'react-router-dom';

const TaMenu = () => (
  <div className="dropdown">
    <ul>
      <li className="dropdownRow">
        <FontAwesomeIcon icon={refresh} /> <span>Refresh</span>
      </li>
      <li className="dropdownRow">
        <FontAwesomeIcon icon={printer} /> <span>Print</span>
      </li>
    </ul>
  </div>
)

const StatusPage = (props) => (
  <main>
    <div className="tuition-assistance-header">
      <div id="ellipsisMenu" onClick={props.taMenuClickHandler}>
        <FontAwesomeIcon icon={ellipsis} />
        {(props.dropDownActivated) ? <TaMenu /> : ''}
      </div>
      <h1>TA</h1>
      <NavLink className="TA-btn" to={"/ta/common-app"}>
        <span>Request TA</span>
        <FontAwesomeIcon icon={angleRight} />
      </NavLink>
    </div>

    <header className="caseTitle">
      <p>Cases</p>
    </header>

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
)

class TaStatusPage extends React.Component {
  constructor() {
    super()

    this.taMenuClickHandler = this.taMenuClickHandler.bind(this)

    this.state = {
      dropDownActivated: false
    }
  }

  taMenuClickHandler() {
    this.setState({
      dropDownActivated: !this.state.dropDownActivated
    })
  }

  render() {
    return (
      <div className="overall">

        <StatusPage
          taMenuClickHandler={this.taMenuClickHandler}
          dropDownActivated={this.state.dropDownActivated}
        />

      </div>
    )
  }
}

export default hot(module)(TaStatusPage)
