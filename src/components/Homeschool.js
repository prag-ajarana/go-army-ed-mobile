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

class Homeschool extends React.Component {
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
          <h1>Home School and Degree Plan</h1>

          <div id="ellipsisMenu" onClick={this.taMenuClickHandler}>
            <FontAwesomeIcon icon={ellipsis} />
            {(this.state.dropDownActivated) ? <TaMenu /> : ''}
          </div>
        </header>

        <article className="commonFields">

          <section className="commonAppFieldWrapper noFloat">
            <select>
              <option>Option #1</option>
              <option>Option #2</option>
            </select>
            <label>SchoolID</label>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <select>
              <option>Option #1</option>
              <option>Option #2</option>
            </select>
            <label>Degree Level</label>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <select>
              <option>Option #1</option>
              <option>Option #2</option>
            </select>
            <label>Degree Type</label>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <select>
              <option>Option #1</option>
              <option>Option #2</option>
            </select>
            <label>Degree Plan</label>
          </section>

          <section className="commonAppFieldWrapper noFloat">
            <label>Degree Name</label>
            <input type="text" name="name"
             placeholder=""
             size="2000"></input>
          </section>

          <NavLink className="saveBtn" to={"/ta/homeschool"}>
            <span>Save and continue</span>
          </NavLink>

        </article>

        <nav className="tableOfContents">
          <section className="tocSection">
            <p>Contact Information</p>
          </section>

          <section className="tocSection">
            <p>Tests</p>
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
            <FontAwesomeIcon icon={fancyDot} />
            <p><strong>Home School and Degree Plan</strong></p>
          </section>

          <section className="tocSection reviewAndSubmit">
            <p>Review and Submit</p>
          </section>
        </nav>
      </main>
    )
  }
}

export default hot(module)(Homeschool)
