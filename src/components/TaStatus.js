import React from 'react'
import { hot } from 'react-hot-loader'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ellipsis from '@fortawesome/fontawesome-free-solid/faEllipsisV'
import fileAlt from '@fortawesome/fontawesome-free-solid/faFileAlt'
import angleRight from '@fortawesome/fontawesome-free-solid/faAngleRight'
import { NavLink, Switch, Route } from 'react-router-dom'
import TaStatusNewStudent from './TaStatusNewStudent'
import TaStatusContinuingStudent from './TaStatusContinuingStudent'
import CommonApp from './common-app/CommonApp'

const TaMenu = (props) => {

  return (
    <div className="dropdown">
      <ul>
        <li className="dropdownRow">
          <span className="studentType" onClick={() => props.taMenuChangeStudentType('new')}>New Student</span>
        </li>
        <li className="dropdownRow">
          <span className="studentType" onClick={() => props.taMenuChangeStudentType('continuing')}>Continuing Student</span>
        </li>
      </ul>
    </div>
  )
}

const StatusPage = () => (
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
)

const NewStudent = (props) => {
  return (
    <section>
      <nav className="tuition-assistance-header">
        <div id="ellipsisMenu" onClick={props.taMenuClickHandler}>
          <FontAwesomeIcon icon={ellipsis} />
          {(props.dropdownActivated) ? <TaMenu
            taMenuChangeStudentType={props.taMenuChangeStudentType}
            path='/ta/common-app' /> : ''}
        </div>

        <h1>TA(new)</h1>
        <NavLink className="TA-btn" to='/ta/common-app/contact-info'>
          <span>Request TA</span>
          <FontAwesomeIcon icon={angleRight} />
        </NavLink>
      </nav>

      <header className="caseTitle">
        <p>Cases</p>
      </header>
    </section>
  )
}

const ContinuingStudent = (props) => {
  return (
    <section>
      <nav className="tuition-assistance-header">
        <div id="ellipsisMenu" onClick={props.taMenuClickHandler}>
          <FontAwesomeIcon icon={ellipsis} />
          {(props.dropdownActivated) ? <TaMenu
            taMenuChangeStudentType={props.taMenuChangeStudentType}
            path='/ta/common-app' /> : ''}
        </div>

        <h1>TA(old)</h1>
        <NavLink className="TA-btn" to='/ta/course-planner'>
          <span>Request TA</span>
          <FontAwesomeIcon icon={angleRight} />
        </NavLink>
      </nav>

      <header className="caseTitle">
        <p>Cases</p>
      </header>
    </section>
  )
}

class TaStatusPage extends React.Component {
  constructor(props) {
    super(props)

    this.taMenuClickHandler = this.taMenuClickHandler.bind(this)
    this.taMenuChangeStudentType = this.taMenuChangeStudentType.bind(this)

    this.state = {
      dropDownActivated: false,
      newStudent: true
    }
  }

  taMenuClickHandler() {
    this.setState({
      dropDownActivated: !this.state.dropDownActivated
    })
  }

  taMenuChangeStudentType(studentType) {

    if (studentType == 'new') {

      this.setState({
        newStudent: true
      })
    }
    else {
      
      this.setState({
        newStudent: false
      })
    }
  }

  render() {

    let StudentView;

    if (this.state.newStudent) {
      StudentView = <NewStudent
        taMenuClickHandler={this.taMenuClickHandler}
        taMenuChangeStudentType={this.taMenuChangeStudentType}
        dropdownActivated={this.state.dropDownActivated}
      />
    }
    else {
      StudentView = <ContinuingStudent
        taMenuClickHandler={this.taMenuClickHandler}
        taMenuChangeStudentType={this.taMenuChangeStudentType}
        dropdownActivated={this.state.dropDownActivated}
      />
    }

    return (
      <div className="overall">

        {/* <nav className="tuition-assistance-header">
          <div id="ellipsisMenu" onClick={this.taMenuClickHandler}>
            <FontAwesomeIcon icon={ellipsis} />
            {(this.state.dropDownActivated) ? <TaMenu /> : ''}
          </div>

          <h1>TA</h1>
          <NavLink className="TA-btn" to='/ta/common-app/contact-info'>
            <span>Request TA</span>
            <FontAwesomeIcon icon={angleRight} />
          </NavLink>
        </nav>

        <header className="caseTitle">
          <p>Cases</p>
        </header> */}
        {StudentView}

        <Switch>
          <Route path={'/ta/status/new-student'} component={TaStatusNewStudent}></Route>
          <Route path={'/ta/status/continuing-student'} component={TaStatusContinuingStudent}></Route>
          {/* <Route path={`/ta/common-app`} component={CommonApp}></Route> */}
        </Switch>

      </div>
    )
  }
}

export default hot(module)(TaStatusPage)
