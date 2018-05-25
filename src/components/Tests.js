import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ellipsis from '@fortawesome/fontawesome-free-solid/faEllipsisV'
import printer from '@fortawesome/fontawesome-free-solid/faPrint'
import refresh from '@fortawesome/fontawesome-free-solid/faSync'
import trash from '@fortawesome/fontawesome-free-solid/faTrashAlt'
import save from '@fortawesome/fontawesome-free-solid/faSave'
import edit from '@fortawesome/fontawesome-free-solid/faEdit'
import fancyDot from '@fortawesome/fontawesome-free-solid/faDotCircle'
import { hot } from 'react-hot-loader'
import { NavLink } from 'react-router-dom';

const TaMenu = () => (
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

class Tests extends React.Component {
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
      <main className="commonApp">
        <header className="commonAppHeader">
          <h1>Tests</h1>

          <div id="ellipsisMenu" onClick={this.taMenuClickHandler}>
            <FontAwesomeIcon icon={ellipsis} />
            {(this.state.dropDownActivated) ? <TaMenu /> : ''}
          </div>
        </header>

        <article className="commonFields">

          <section className="commonAppFieldWrapper noFloat">
            <select>
              <option>No</option>
              <option>Yes</option>
            </select>
            <label>Taken SAT</label>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <label>SAT Last Taken Date</label>
            <input id="date" type="date"></input>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <select>
              <option>No</option>
              <option>Yes</option>
            </select>
            <label>Taken ACT</label>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <label>ACT Last Taken Date</label>
            <input id="date" type="date"></input>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <select>
              <option>No</option>
              <option>Yes</option>
            </select>
            <label>Taken Distance Learning or Online Course</label>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <select>
              <option>No</option>
              <option>Yes</option>
            </select>
            <label>Ever Enrolled in Degree Program at Desired School</label>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <label>Date Start Enrolled Degree Program at Desired School</label>
            <input id="date" type="date"></input>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <label>Date End Enrolled Degree Program at Desired School</label>
            <input id="date" type="date"></input>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <select>
              <option>Option #1</option>
              <option>Option #2</option>
              <option>Option #3</option>
            </select>
            <label>When Enroll in Desired School</label>
          </section>

          <section className="commonAppFieldWrapper justification">
            <label>Student Enrollment Justification</label>
            <input type="text" name="name"
             placeholder=""
             size="2000" className="justificationBox"></input>
          </section>

          <NavLink className="saveBtn" to={"/ta/demo"}>
            <span>Save and continue</span>
          </NavLink>

        </article>

        <nav className="tableOfContents">
          <section className="tocSection">
            <p>Contact Information</p>
          </section>

          <section className="tocSection">
            <FontAwesomeIcon icon={fancyDot} />
            <p><strong>Tests</strong></p>
          </section>

          <section className="tocSection">
            <p>Demographic Information</p>
          </section>

          <section className="tocSection">
            <p>Training</p>
          </section>

          <section className="tocSection">
            <p>Prior Education</p>
          </section>

          <section className="tocSection">
            <p>Home School and Degree Plan</p>
          </section>

          <section className="tocSection reviewAndSubmit">
            <p>Review and Submit</p>
          </section>
        </nav>
      </main>
    )
  }
}

export default hot(module)(Tests)
