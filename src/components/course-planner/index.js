import React from 'react'
import { hot } from 'react-hot-loader'
import { NavLink, Switch, Route } from 'react-router-dom'

// let veryImportantRegexExp = /.*?(<a.*?>)(.*?<)/a>.*?/

const schoolDataList = () => {
  let schools = `Blue Ridge Community College<Bridgewater College<Central Virginia Community College<Christopher Newport University<College of William and Mary<Dabney S Lancaster Community College<Danville Community College<Eastern Mennonite University<Eastern Shore Community College<Germanna Community College<J. Sargeant Reynolds Community College<James Madison University <John Tyler Community College<Longwood University<Lord Fairfax Community College<Mountain Empire Community College<New River Community College<Norfolk State University<Northern Virginia Community College<Patrick Henry Community College <Paul D. Camp Community College<Piedmont Virginia Community College<Radford University<Rappahannock Community College<Richard Bland College<Southside Virginia Community College<Southwest Virginia Community College<Thomas Nelson Community College<Tidewater Community College<University of Mary Washington<University of Virginia - Main Camp<University of Virginia College at Wise<Virginia Highlands Community College<Virginia Military Institute<Virginia State University<Virginia Tech<Virginia Western Community College<Wytheville Community College`;

  let schoolsArr = [];

  schools.replace(/</g, ',').split(',').forEach((school, i) => {
    schoolsArr.push(<option value={school} key={i} />)
  })

  return schoolsArr
}

const TaStatusPage = () => {
  let schoolList = schoolDataList();

  return (
    <div className="overall">

      <article id="coursePlanner">
        <section>
          <input className="float" />
          <label>Units Remaining to Graduate</label>
        </section>

        <section>
          <input className="float" />
          <label>Unit type</label>
        </section>

        <section>
          <input placeholder="College of William and Mary" list="school" id="schools" name="schools" />
          <label>School Name</label>

          <datalist id="school">
            {schoolList}
          </datalist>
        </section>
      </article>

    </div>
  )
}

export default hot(module)(TaStatusPage)
