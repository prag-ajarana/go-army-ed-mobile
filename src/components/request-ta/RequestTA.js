import React from 'react'
import { hot } from 'react-hot-loader'
import { NavLink, Switch, Route } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import teacher from '@fortawesome/fontawesome-free-solid/faChalkboardTeacher'
import school from '@fortawesome/fontawesome-free-solid/faSchool'

// let veryImportantRegexExp = /.*?(<a.*?>)(.*?<)/a>.*?/

// const schoolDataList = () => {
//   let schools = `Blue Ridge Community College<Bridgewater College<Central Virginia Community College<Christopher Newport University<College of William and Mary<Dabney S Lancaster Community College<Danville Community College<Eastern Mennonite University<Eastern Shore Community College<Germanna Community College<J. Sargeant Reynolds Community College<James Madison University <John Tyler Community College<Longwood University<Lord Fairfax Community College<Mountain Empire Community College<New River Community College<Norfolk State University<Northern Virginia Community College<Patrick Henry Community College <Paul D. Camp Community College<Piedmont Virginia Community College<Radford University<Rappahannock Community College<Richard Bland College<Southside Virginia Community College<Southwest Virginia Community College<Thomas Nelson Community College<Tidewater Community College<University of Mary Washington<University of Virginia - Main Camp<University of Virginia College at Wise<Virginia Highlands Community College<Virginia Military Institute<Virginia State University<Virginia Tech<Virginia Western Community College<Wytheville Community College`;
//
//   let schoolsArr = [];
//
//   schools.replace(/</g, ',').split(',').forEach((school, i) => {
//     schoolsArr.push(<option value={school} key={i} />)
//   })
//
//   return schoolsArr
// }
const Enroll = () => {
  return (
    <div>Enroll here</div>
  )
}

const RequestTA = () => {
  // let schoolList = schoolDataList();

  return (
    <main>

      <article className="commonForm">
        <h1>Request TA</h1>

        {/* <section>
          <h3>School Name</h3>
          <p>College of William & Mary</p>
        </section> */}

        <section id='searchSection'>
          <label className="fieldLabel">Search by subject, catalog number, or GAE number</label>
          <input className="shortWidth" defaultValue="ACCT" list="school" id="schools" />
        </section>

        <section id="searchResultsSection">
          <article>
            <section className="titleSection longSection">
              <div>
                <FontAwesomeIcon className="schoolIcon" icon={school} />
                <label><strong>College of William & Mary</strong></label>
              </div>
              {/* <span>College of William & Mary</span> */}
            </section>

            <section className="longSection">
              <label>Description</label> <span>Principles of Financial Accounting</span>
            </section>

            <section>
              <label>GoArmyEd Class Number</label> <span>43021</span>
            </section>

            <section>
              <label>Subject</label> <span>ACCT</span>
            </section>

            <section>
              <label>Catalog Number</label> <span>2301</span>
            </section>

            <section>
              <label>Section</label> <span>C078</span>
            </section>

            <section>
              <label>Semester Hours</label> <span>3</span>
            </section>

            <section>
              <label>Class Type</label> <span>TA</span>
            </section>

            <section>
              <label>Start Date</label> <span>08/27/2018</span>
            </section>

            <section>
              <label>End Date</label> <span>12/08/2018</span>
            </section>

            <section>
              <label>Seats Available</label> <span>15</span>
            </section>

            <section>
              <label>Class Cost/SH</label> <span>$185.00</span>
            </section>

            <section>
              <label>Total Class Cost/SH</label> <span>$555.00</span>
            </section>

            <section>
              <label>Last Day to Drop for Full Refund</label> <span>08/26/2018</span>
            </section>

            <NavLink to='/ta/request-ta/enroll'>Enroll in Course</NavLink>
          </article>

          <article>
            <section className="titleSection longSection">
              <div>
                <FontAwesomeIcon className="schoolIcon" icon={school} />
                <label><strong>College of William & Mary</strong></label>
              </div>
            </section>

            <section className="longSection">
              <label>Description</label> <span>Principles of Financial Accounting</span>
            </section>

            <section>
              <label>GoArmyEd Class Number</label> <span>43022</span>
            </section>

            <section>
              <label>Subject</label> <span>ACCT</span>
            </section>

            <section>
              <label>Catalog Number</label> <span>2301</span>
            </section>

            <section>
              <label>Section</label> <span>C079</span>
            </section>

            <section>
              <label>Semester Hours</label> <span>3</span>
            </section>

            <section>
              <label>Class Type</label> <span>TA</span>
            </section>

            <section>
              <label>Start Date</label> <span>08/27/2018</span>
            </section>

            <section>
              <label>End Date</label> <span>12/08/2018</span>
            </section>

            <section>
              <label>Seats Available</label> <span>9</span>
            </section>

            <section>
              <label>Class Cost/SH</label> <span>$185.00</span>
            </section>

            <section>
              <label>Total Class Cost/SH</label> <span>$777.00</span>
            </section>

            <section>
              <label>Last Day to Drop for Full Refund</label> <span>08/26/2018</span>
            </section>

            <NavLink to='/ta/request-ta/enroll'>Enroll in Course</NavLink>
          </article>
        </section>
      </article>

      {/* <Switch>
        <Route path={`/ta/request-ta/enroll`} component={Enroll}></Route>
      </Switch> */}
    </main>
  )
}

export default hot(module)(RequestTA)
