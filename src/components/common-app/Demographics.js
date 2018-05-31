import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ellipsis from '@fortawesome/fontawesome-free-solid/faEllipsisV'
import { hot } from 'react-hot-loader'
import { NavLink } from 'react-router-dom';
import scrollToTop from './scrollToTop'

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

class Demographics extends React.Component {
  constructor(props) {
    super(props)

    scrollToTop()

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
          <h1>Demographics</h1>

          <div id="ellipsisMenu" onClick={this.taMenuClickHandler}>
            <FontAwesomeIcon icon={ellipsis} />
            {(this.state.dropDownActivated) ? <TaMenu /> : ''}
          </div>
        </header>

        <article className="commonFields">

          <section className="commonAppFieldWrapper noFloat">
            <label>Hispanic/Latino</label>
            <select>
              <option>No</option>
              <option>Yes</option>
            </select>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <label>Race</label>
            <select>
              <option>American Indian/Alaskan Native</option>
              <option>Asian</option>
              <option>Black/African American</option>
              <option>Native Hawaiian/Pacific Islander</option>
              <option>White/Caucasian</option>
            </select>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <label>Date of Birth</label>
            <input id="date" type="date"></input>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <label>Gender</label>
            <select>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <label>Disability Type</label>
            <select>
              <option>Option #1</option>
              <option>Option #2</option>
            </select>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <label>Primary Language</label>
            <select>
              <option>English</option>
              <option>Spanish</option>
              <option>Etc.</option>
            </select>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <label>English Primary Language</label>
            <select>
              <option>Yes</option>
              <option>No</option>
            </select>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <label>English as Foreign Language Test</label>
            <select>
              <option>Option #1</option>
              <option>Option #2</option>
            </select>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <label>Parents Level of Education</label>
            <select>
              <option>Option #1</option>
              <option>Option #2</option>
              <option>Option #3</option>
            </select>
          </section>

          <NavLink className="saveBtn" to={"/ta/training"}>
            <span>Save and continue</span>
          </NavLink>

        </article>
      </main>
    )
  }
}

export default hot(module)(Demographics)
